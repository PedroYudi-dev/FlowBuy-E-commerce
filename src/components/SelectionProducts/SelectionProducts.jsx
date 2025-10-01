// chamada
import { getProduct } from "../../Services/getProduct/allGetProduct"
import "./SelectionProducts.css";
import clsx from "clsx";

// icons
import { Star } from "lucide-react";



// UseState
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SelectionProducts() {

  const location = useLocation();
  const RouterContainerProduct = clsx("Container-SelectionProducts",{
    "Container-SelectionProducts-Buyer": location.pathname.startsWith("/Buyer")
  })

  const RouterProduct = clsx("Products", {
    "Products-Buyer": location.pathname.startsWith("/Buyer")
  });

  const RouterButtonBuyerProduct = clsx("buy-product",{
    "buy-product-Buyer": location.pathname.startsWith("/Buyer")
  })

  const [produto, setProduto] = useState([])
  const navigate = useNavigate()

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
    <div className={RouterContainerProduct}>
      <h1>Produtos</h1>
      <div id="structure-SelectionProducts">
        {produto.slice(0, 10).map((product) => (
          <div className={RouterProduct} key={product.id}>
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
              <button
                type="submit"
                className={RouterButtonBuyerProduct}
                onClick={() => {
                  navigate(`/Produto/${product.id}/${product.titulo}`);
                }}
              >
                Visualizar
              </button>
            </div>
            <div className="button-car"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
