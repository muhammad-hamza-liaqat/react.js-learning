import React, { useEffect, useState } from 'react'

export default function UseEffect () {
  const [counter, setCounter] = useState(0)
  // useEffect implementation
  // useEffect comes when there is need to change something during component lifecycle
  // when the component is being mounted, the useEffect comes to the picture.

  useEffect(() => {
    console.log('exceuted when component is mounted.!')
    return function () {
      console.log('unmounted component!!!!!!!!!!')
    }
  }, [])

  // when the counter value is being updated this useEffect will run...
  useEffect(() => {
    console.log('user increase the value of counter')

    // if we add the return with callback here, it will return the previous unmount component and then return the new mounted component
  }, [counter])

  const increaseByOne = () => {
    setCounter(previousCounter => previousCounter + 1)
  }
  const decreaseByOne = () => {
    if (counter === 0) {
      return 0
    }
    setCounter(previousCounter => previousCounter - 1)
  }

  return (
    <>
      <div className='container'> counter Value: {counter}</div>
      <button className='btn btn-primary mx-4' onClick={increaseByOne}>
        {' '}
        add 1
      </button>
      <button className='btn btn-primary' onClick={decreaseByOne}>
        {' '}
        subtract 1
      </button>
    </>
  )
}
