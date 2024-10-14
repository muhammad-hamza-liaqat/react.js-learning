import Counter from './components/Counter'
import NavBar from './components/NavBar'
import Form from './components/Form'
import "./style/components.css"

function App() {
  return (
    <>
      <NavBar name='express.js docs' about='about express.js' />
      <Counter />
      <Form />
    </>
  )
}

export default App
