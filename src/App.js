import CardCounter from './components/CardCounter'
import NavBar from './components/NavBar'
import ReducerCounter from './components/ReducerCounter'
import "./style/components.css"

function App() {
  return (
    <>
      <NavBar name='express.js docs' about='about express.js' />
      <div className="cardCounter">
        {/* <CardCounter /> */}
        <ReducerCounter/>
      </div>
    </>
  )
}

export default App
