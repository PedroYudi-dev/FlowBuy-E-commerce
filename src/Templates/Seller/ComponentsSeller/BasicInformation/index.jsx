import { useState } from "react";
import "./style.css"

export default function BasicInformation(){

    const [nameProduct, setNameProduct] = useState("")
    const [descripitonProduct, setDescripitonProduct] = useState("");
    const [nameError, setNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const handleValidationName = (e) =>{
      const nameValue = String(e.target.value)

      if(!nameValue.trim()){
        setNameError("O nome do Produto é Obrigatório")
      }else if(nameValue.length <= 3){
        setNameError("O nome deve ter pelo menos 3 caracteres.")
      }else if(nameValue.length >= 100){
        setNameError("O nome não pode ter mais de 100 caracteres.")
      }else if(!/^[a-zA-Z0-9\s\-()]+$/.test(nameValue)){
        setNameError( "O nome contém caracteres inválidos.")
      }else{
        setNameError("")
      }
      setNameProduct(e.target.value)
    }

    const handleValidationDescripition = (e) =>{
      const nameDescripition = String(e.target.value);

      if (!nameDescripition.trim()) {
        setDescriptionError("A descrição do produto é obrigatória.");
      } else if (nameDescripition.length <= 5) {
        setDescriptionError("A descrição deve ter pelo menos 10 caracteres.");
      } else if (nameDescripition.length >= 200) {
        setDescriptionError("A descrição não pode ter mais de 200 caracteres.");
      } else if (/<[^>]*>/.test(nameDescripition)) {
        setDescriptionError("O nome contém caracteres inválidos.");
      } else {
        setDescriptionError("");
      }
      setDescripitonProduct(e.target.value);

    }

    return (
      <form id="container-basic-information">
        <h3>Informações Básicas</h3>
        <div>
          <div className="form-input-info">
            <label htmlFor="name-product">Nome do Produto*</label>
            <input
              type="text"
              id="name-product"
              placeholder="Ex: Camiseta Branca"
              value={nameProduct}
              onChange={handleValidationName}
            />
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          </div>
          <div className="form-input-info">
            <label htmlFor="brand-product">Descrição*</label>
            <textarea
              type="text"
              id="brand-product"
              placeholder="Ex: dcmowcmwecoe"
              value={descripitonProduct}
              onChange={handleValidationDescripition}
            />
            {descriptionError && <p style={{ color: "red" }}>{descriptionError}</p>}
          </div>
          <div className="form-select-info">
            <label htmlFor="category-product">Marca</label>
            <select name="Marca" id="">
              <div className="Container-structe-options">
                <option value="">Ex: Aplle, Samsung..</option>
                <option value="Dell">Dell</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
              </div>
            </select>
          </div>
        </div>
      </form>
    );
}