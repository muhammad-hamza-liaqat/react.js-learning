import { useState } from 'react'
import NavBar from './components/NavBar'
import UnMount from './components/UnMount'
import UseEffect from './components/UseEffect'

function App() {
  const [state, setState] = useState(true)
  const toggleState = () =>{
    setState(previousState => !previousState)
  }
  return (
    <>
      <NavBar/>
      <UnMount toggleState={toggleState}/>
      {state && <UseEffect/>}
    </>
  )
}

export default App
