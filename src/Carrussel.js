import { useState } from "react";
import "./App.css";
import { SliderData } from "./CarrusselData";

// const ImageSlider = () => {
//   return
//   <>
//   {SliderData.map((slide, index) =>{
//   return(
//       <img src= {slide.image} alt = "images Miriam"/>
//   )

//   })}</>;
// };
export default function Carrussel() {
  const art = ["acrobacia.jpg", "balon.jpg", "pozo.jpg", "petanca.jpg"];
  const [currentFoto, setCurrentFoto] = useState(0);
  const numImatge = [1, 2, 3, 4];
  const [cssClass, setCssClass] = useState("visible");

  function back() {
    if (currentFoto <= 0) {
      setCurrentFoto(3);
    } else {
      setCurrentFoto((currentFotoDins) => currentFotoDins - 1);
    }
  }
  function next() {
    if (currentFoto >= 3) {
      setCurrentFoto(0);
    } else {
      setCurrentFoto((currentFotoDins) => currentFotoDins + 1);
    }
  }
  return (
    <div className="Carrussel">
      <h1>Carrusel d'imatges</h1>
      {numImatge.map((n) => (
        <button onClick={() => setCurrentFoto(n - 1)}>{n}</button>
      ))}

      {art.map((i, index) => (
        <img
          src={"./imagenes/" + i}
          alt={art}
          className={index === currentFoto ? cssClass : "amagada"}
        />
      ))}
      <button onClick={next} className="Avança">
        NEXT
      </button>
      <button className="Retocedeix" onClick={back}>
        {" "}
        BACK
      </button>
    </div>
  );
}
