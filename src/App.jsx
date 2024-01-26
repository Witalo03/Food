import React from "react"
import Home from "./pages/home/home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Historico from "./pages/historico/historico"
import Checkout from "./pages/checkout/checkout"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={< Checkout/>} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
