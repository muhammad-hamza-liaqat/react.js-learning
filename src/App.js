import CounterCard from "./components/CounterCard"
import NavBar from "./components/NavBar"
import "./components/css.css"
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <CounterCard />
      </div>
    </>
  )
}

export default App
