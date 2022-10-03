import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import Context from "../Contex";

export default function Home() {

  const { fotos, setFavoritos, favoritos } = useContext(Context);

  const agregarFavoritos = (e) => {

    if (e.liked == false) {
      e.liked = true
      setFavoritos([...favoritos, e]);
    } else {
      e.liked = false
      const newFavoritos = favoritos.filter((favorito) => favorito.id !== e.id)
      setFavoritos(newFavoritos)
    }
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((e) => (
        <div 
          key={e.id}
          onClick={() => {agregarFavoritos(e)}}
          className="foto"
          style={{backgroundImage: `url(${e.src.tiny})`}}
        >
        <Heart filled={e.liked} />
        <p>{e.alt}</p>
        </div>
      ))};
    </div>
  );
}
