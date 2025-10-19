// import
import { useState } from "react";
import "./style.css";

export default function PriceProduct() {

    const [price, setPrice] = useState("")

    // funtion
    const handleFormtPrice = (e) =>{
        const removeNotNumber = e.target.value.replace(/\D/g, "")
        const FormatNumber= (Number(removeNotNumber)/100).toLocaleString("pt-BR", {
            style:"currency",
            currency:"BRL"
        })
        setPrice(FormatNumber)
    }

  return (
    <form id="container-price-product">
      <h3>Preço do Produto</h3>
      <div className="structure-price">
        <label>Preço</label>
        <input type="text"  min="0" step="0.01" placeholder="R$50,00" required value={price} onChange={handleFormtPrice}/>
      </div>
    </form>
  );
}
