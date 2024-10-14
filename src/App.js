import Counter from './components/Counter'
import NavBar from './components/NavBar'
import "./style/components.css"

function App() {
  return (
    <>
      <NavBar name='express.js docs' about='about express.js' />
      <Counter />
    </>
  )
}

export default App
