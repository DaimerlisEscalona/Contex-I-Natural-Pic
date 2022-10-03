import { useContext, useEffect } from "react";
import Context from "../Contex";

export default function Favoritos() {

  const {favoritos} = useContext(Context);
  let text = ""

  if (favoritos == ""){
    text = "No se han agregado fotos a la sección de favoritos"
  }

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((e) => (
          <div
          className="foto"
          style={{backgroundImage: `url(${e.src.tiny})`}}
          key={e.id}
        >
        <p>Photographer: {e.photographer}</p>
        </div>
        ))}
      </div>
     <div><h3>{text}</h3></div>
    </div>
  );

}
