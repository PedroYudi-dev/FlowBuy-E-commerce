// chamada
import { getProduct } from "../../Services/getProduct/allGetProduct";


import "./SelectionProducts.css";
// icons
import { Star } from "lucide-react";



// UseState
import { useEffect, useState } from "react";

export default function SelectionProducts() {

  const [produto, setProduto] = useState([])

  useEffect(() =>{
      const viewProductGet = async () =>{
        try {
          const dataProduct = await getProduct();
          setProduto(dataProduct);
        } catch (error) {
          console.error(error, "Não foi possivel mostrar os produtos");
        }
    } 
    viewProductGet()
  }, [])

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
              <p>
                {product.valor &&
                  parseFloat(
                    String(product.valor).replace(",", ".")
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </p>
            </div>
            <div className="button-buy">
              <button className="buy-product">Visualizar </button>
            </div>
            <div className="button-car"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
