// import
import { useEffect, useState } from "react";
import "./style.css"

export default function StockProduct({ onCreateStock, reset }) {
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (reset) {
      setStock("");
      setError("");
    }
  }, [reset]);
  const handlePriceValidation = (e) => {
    const value = Number(e.target.value);

    if (value < 0) {
      setError("O estoque não pode ser negativo.");
    } else if (!Number.isInteger(value)) {
      setError("O valor deve ser um número inteiro.");
    } else if (value > 10000) {
      setError("O estoque máximo permitido é 10.000 unidades.");
    } else {
      setError("");
    }

    setStock(e.target.value);
    onCreateStock({ quantidadeInicial: value });
  };

  return (
    <form id="container-stock-product">
      <h3>Estoque do Produto</h3>
      <div className="structure-stock">
        <label>Quantidade</label>
        <input
          type="Number"
          value={stock}
          onChange={handlePriceValidation}
          min="0"
          placeholder="Ex:50"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </form>
  );
}