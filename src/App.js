import CardCounter from './components/CardCounter'
import NavBar from './components/NavBar'
import "./style/components.css"

function App() {
  return (
    <>
      <NavBar name='express.js docs' about='about express.js' />
      <div className="cardCounter">
        <CardCounter />
      </div>
    </>
  )
}

export default App
