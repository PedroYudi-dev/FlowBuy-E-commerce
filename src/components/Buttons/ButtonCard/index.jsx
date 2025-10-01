// import
import "./style.css"
import clsx from "clsx"

// state
import { useLocation } from "react-router-dom";

export default function ButtonCard(){

  const location = useLocation();
  const RouterButtonCard = clsx("car-product",{
    "car-product-buyer": location.pathname.startsWith("/Buyer"),
  })

    return (
      <>
        <button className={RouterButtonCard}>
          Adicionar ao Carrinho
        </button>
      </>
    );
} 