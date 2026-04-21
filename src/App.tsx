import Navbar from "./layout/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import './App.css'

function App() {
  return (
    <>
      {/* Navbar yahan show hoga */}
      <Navbar />
       <Hero />

      {/* Baaki content */}
      <h1>My Website</h1>
    </>
  )
}

export default App