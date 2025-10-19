// import
import { Link } from "react-router-dom";
import "./style.css"

export default function ButtonCreateProduct(){
    return (
      <>
        <div id="container-Create-product">
          <button className="Create-product">CriarProduto</button>
          <button className="Cancel-product">
            <Link to="/Seller">Cancelar</Link>
          </button>
        </div>
      </>
    );
}