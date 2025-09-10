import { useState, useEffect } from "react";
import api from "../../../../Services/Api";

export default function AvaliationProduct({produtoId}){

    // constante
    const [avaliation, setAvaliation] = useState([]);

    useEffect(() => {
      const getAvaliation = async () => {
        try {
          const response = await api.get(`/api/Avaliacao`);
          const avaliacoesFiltradas = response.data.filter(
            (av) => av.produtoId === produtoId // ou av.productId
          );
          setAvaliation(avaliacoesFiltradas);
          console.log(avaliacoesFiltradas);
          console.log(response.data);
        } catch (err) {
          console.log(err, "Erro ao buscar a Avaliação");
        }
      };
       getAvaliation();
    }, [produtoId]);


    return (
      <>
        {avaliation.map((item, index) => (
          <div key={index}>
            <span>{item.nota} estrelas</span>
          </div>
        ))}
      </>
    );
}