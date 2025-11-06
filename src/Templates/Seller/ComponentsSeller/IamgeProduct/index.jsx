import ImagemBase64 from "./ImagemBase64";
import "./style.css"

// state
// import { useState } from "react";
export default function ImageProduct({ onImageChange, reset }) {
  return (
    <form id="container-image-product">
      <h3>Imagens do Produto</h3>
      <p>Adicione até 3 imagens e selecione a cor de cada uma</p>
      <div>
        <ImagemBase64 onImageChange={onImageChange} reset={reset}/>
      </div>
    </form>
  );
}