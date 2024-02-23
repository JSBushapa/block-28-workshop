// import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
        <h1></h1>
        <div id="navbar">
            <a href="/">Home</a>
            <a href="/blue">blue</a>
            <a href="/red">red</a>
        </div>
        <div id="main-section">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red/>} />
          </Routes>
           
        </div>
    </div>
    </>
  )
}

export default App
