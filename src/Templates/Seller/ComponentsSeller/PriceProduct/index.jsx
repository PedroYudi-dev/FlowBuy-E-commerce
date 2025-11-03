// import
import { useState } from "react";
import "./style.css";

export default function PriceProduct({onCreatePrice}) {

    const [price, setPrice] = useState("")
    // const [priceError, setPriceError] = useState("")

    // funtion
    const handleFormtPrice = (e) => {
      const onlyNumbers = e.target.value.replace(/\D/g, "");
      const numericValue = Number(onlyNumbers) / 100;

      setPrice(numericValue);
      onCreatePrice({ Preco: numericValue });
    };

  
  return (
    <div id="container-price-product">
      <h3>Preço do Produto</h3>
      <div className="structure-price">
        <label>Preço</label>
        <input
          type="text"
          min="0"
          step="0.01"
          placeholder="R$50,00"
          required
          value={
            price
              ? price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : ""
          }
          onChange={handleFormtPrice}
        />
        {/* {priceError && <p style={{ color: "red" }}>{priceError}</p>} */}
      </div>
    </div>
  );
}
