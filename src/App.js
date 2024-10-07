import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <NavBar name='express.js docs' about='about express.js' />
      <div className="container">
        <TextForm heading='Enter Text to Analyze' />

      </div>
    </>
  )
}

export default App
