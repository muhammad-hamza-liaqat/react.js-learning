import { useContext } from "react"
import Counter from "./components/Counter"
import NavBar from "./components/NavBar"
import "./components/css.css"
import { counterContext } from "./context/context"
function App() {
  const counterState = useContext(counterContext)
  console.log(counterState, "counter value from createContext")
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="app-head1">{counterState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App
