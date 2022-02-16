import { useState } from "react";
import "./App.css";
import Graella from "./Graella";
import Carrussel from "./Carrussel";

function App() {
  return (
    <>
      <div className="App">
        {" "}
        <h1>exercicis</h1>
      </div>
      <Graella />
      <br></br>
      <Carrussel />
    </>
  );
}

export default App;
