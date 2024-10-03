import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    {/* passing default props */}
      <NavBar />
      {/* if want to pass custom props */}
      {/* <NavBar name='express.js docs' about='about express.js' /> */}
    </>
  )
}

export default App
