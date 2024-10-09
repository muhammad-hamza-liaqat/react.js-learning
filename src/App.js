import Counter from "./components/Counter"
import NavBar from "./components/NavBar"
import "./components/css.css"
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App
