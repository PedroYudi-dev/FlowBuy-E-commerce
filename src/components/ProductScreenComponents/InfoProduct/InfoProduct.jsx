import { useParams } from "react-router-dom";
import api from "../../../Services/Api";
import { useState, useEffect } from "react";

export default function InfoProduct(){
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [avaliation, setAvaliation] = useState([])

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

 
    useEffect(() =>{
        const getAvaliation = async () => {
          try {
            const response = await api.get(`/api/Avaliacao/${id}`);
            setAvaliation(response.data);
            console.log(response.data);
          } catch (err) {
            console.log(err, "Erro ao buscar descrição");
          }
        };
        getAvaliation();
    }, [id])

    

    return (
      <div id="info-container">
        <div id="info-image">
          {product.image && <img src={product.image} alt={product.titulo} />}
        </div>
        <div id="info-Product">
          <h1>{product.titulo}</h1>
          <p>{product.descricao}</p>
          {avaliation.map((item, index) => (
            <div key={index}>
              <span>{item.nota} estrelas</span>
            </div>
          ))}
          <p>R${product.valor}</p>
        </div>
      </div>
    );
}