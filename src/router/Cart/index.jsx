import SellectionProductsInCart from "./Components/ProductsInCart";
import "./style.css"

export default function CartProduct() {
    return (
      <div id="conatinerCartProduct">
        <div className="strucutureCartProduct">
          <h2>Carrinho de Compras</h2>
          <div className="viewProductCart">
            <SellectionProductsInCart/>
          </div>
        </div>
      </div>
    );
}