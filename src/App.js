import './App.css'

function App () {
  let name = 'Hamza Liaqat'
  return (
    <>
      <nav className='navBar'>
        <li>Home</li>
        <li>Course</li>
        <li>My Portal</li>
      </nav>

      <div className='container'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem
          qui quo aspernatur cumque repellat provident totam, ad impedit
          mollitia iure ea laudantium at vel sed atque neque rem. Quisquam?
        </p>
        author: {name}
      </div>
    </>
  )
}

export default App
