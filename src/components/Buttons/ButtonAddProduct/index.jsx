// import
import { Link } from "react-router-dom";
import "./style.css";

// state

export default function ButtonCard() {
  return (
    <>
      <button className="Add-product">
        <Link to="registerProduct">Cadastrar Produto</Link>
      </button>
    </>
  );
}
