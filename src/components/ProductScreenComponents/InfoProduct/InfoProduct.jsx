import "./style.css"
import { useParams } from "react-router-dom";
import api from "../../../Services/Api";
import { useState, useEffect } from "react";
import AvaliationProduct from "./Avation/AvaliationProduct";


// Icons
import { Star } from "lucide-react";



export default function InfoProduct(){
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [detalies, setDetalies] = useState()
    // Puxando o produto pelo Id
    useEffect(() =>{
        const getInfoProduct = async () => {
          try {
            const response = await api.get(`/api/Produto/${id}`);
            setProduct(response.data);
            console.log(response.data);
          } catch (err) {
            console.log(err, "Erro ao buscar produto");
          }
        };
        getInfoProduct();
    }, [id])


    return (
      <div id="container">
        <div id="detalhe-container">
          <div id="detalhe-image">
            {product.image && <img src={product.image} alt={product.titulo} />}
          </div>
          <div className="detalhe-product">
            <div>
              <h1>{product.titulo}</h1>
              {/* <div>
              <AvaliationProduct produtoId={id}/>
            </div> */}
              <Star color="yellow" />
              <Star color="yellow" />
              <Star color="yellow" />
              <Star color="yellow" />
              <Star color="yellow" />
              <p>R${product.valor}</p>
            </div>
          </div>
        </div>
        <div id="detalhe-product-allDescripition">
          <div className="type-descripition">
            <button
              className={detalies === "overview" ? "activeTab" : ""}
              onClick={() => setDetalies("overview")}
            >
              Overview
            </button>
            <button
              className={detalies === "review" ? "activeTab" : ""}
              onClick={() => setDetalies("review")}
            >
              Review
            </button>
            <button
              className={detalies === "suport" ? "activeTab" : ""}
              onClick={() => setDetalies("suport")}
            >
              Suport
            </button>
          </div>
        </div>
        {detalies && (
          <div className="tab-content">
            {detalies === "overview" && (
              <div>
                <h2>Sobre o Produto</h2>
                <p>{product.descricao}</p>
              </div>
            )}
            {detalies === "review" && (
              <div>
                <h2>Reviews</h2>
                <AvaliationProduct produtoId={id} />
              </div>
            )}
            {detalies === "suport" && (
              <div>
                <h2>Suportet</h2>
                <p>Here you will find warranty and support info.</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
}