import "./SelectionProducts.css";
import Api from "../../Services/Api";
// icons
import { Star } from "lucide-react";



// UseState
import { useEffect, useState } from "react";

export default function SelectionProducts() {

  const [produto, setProduto] = useState([])

  const getProduct = async () => {
    const response = await Api.get("/api/Produto");
    setProduto(response.data);
    console.log(response)
  };

  useEffect(() => {
    getProduct();
  }, []);
  


  return (
    <div id="Container-SelectionProducts">
      <h1>Produtos</h1>
      <div id="structure-SelectionProducts">
        {produto.slice(0, 10).map((product) => (
          <div className="Products" key={product.id}>
            <img src={product.image} alt={product.titulo} />
            <div className="info-product">
              <label htmlFor="">{product.titulo}</label>
              <div className="stars">
                <Star color="#f7eb0cff" className="star" />
                <Star color="#f7eb0cff" className="star" />
                <Star color="#f7eb0cff" className="star" />
                <Star color="#f7eb0cff" className="star" />
                <Star color="#f7eb0cff" className="star" />
              </div>
              <p>R${product.valor}</p>
            </div>
            <div className="button-buy">
              <button className="buy-product">Visualizar </button>
            </div>
            <div className="button-car">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
