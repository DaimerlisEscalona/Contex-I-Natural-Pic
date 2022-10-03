import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./Contex";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useState, useEffect } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);
  const [favoritos, setFavoritos] =useState([]);
  const sharedState = {fotos, setFotos, favoritos, setFavoritos}

  const consultarJson = async () => {
    const endpoint = "/fotos.json";
    const url = endpoint
    const response = await fetch(url)
    const data = await response.json()
    setFotos(data.photos)
  }

  useEffect(() => {
    consultarJson()
  }, [])

  return (
    <div className="App">
      <Context.Provider value={ sharedState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
