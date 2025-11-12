import SelectionProductsSeller from "../ComponentsSeller/Products";
import "./style.css";

export default function ProductsSeller(){
    return (
      <div id="container-products-seller">
        <div id="product-screen-seller">
          <SelectionProductsSeller/>
        </div>
      </div>
    );
}