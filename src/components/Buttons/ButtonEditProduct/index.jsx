// import
import { Link } from "react-router-dom";
import "./style.css"

export default function ButtonEditProduct({ onSubmitEdit, text }) {
  return (
    <>
      <div id="container-Create-product">
        <button className="Create-product" onClick={onSubmitEdit}>
          {text}
        </button>
        <button className="Cancel-product">
          <Link to="/Seller">Cancelar</Link>
        </button>
      </div>
    </>
  );
}