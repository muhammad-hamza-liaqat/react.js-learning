import './App.css'
import About from './components/About'
import NavBar from './components/NavBar'
// import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <NavBar name='express.js docs' about='about express.js' />
      <div className="container">
        {/* <TextForm heading='Enter Text to Analyze' /> */}
        <About/>
      </div>
    </>
  )
}

export default App
