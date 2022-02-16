import { useState } from "react";

export default function Graella() {
  const fotos = new Array(
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5d137e105cafe826be509e41/buho0.jpg",
    "https://lpfw.org/wp-content/uploads/2015/10/barn-owl-2-422x281.jpg",
    "https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFPorqu%C3%A9-los-b%C3%BAhos-pueden-girar-tanto-su-cabeza-1024x688.jpg",
    "https://debuhosonline.com/wp-content/uploads/2021/02/que-comen-los-buhos.jpg"
  );
  const [imatgeClicada, setImatgeClicada] = useState(null);
  const [cssClass, setCssClass] = useState("");

  function canvi(props) {
    setImatgeClicada(props);
    if (cssClass === "") {
      setCssClass("gran");
    } else {
      setCssClass("");
    }
  }
  return (
    <div className="Graella">
      <h1>galeria fotos</h1>
      {fotos.map((indice) => (
        <img
          onClick={() => canvi(indice)}
          src={indice}
          alt={indice}
          className={imatgeClicada === indice ? cssClass : ""}
        />
      ))}
    </div>
  );
}
