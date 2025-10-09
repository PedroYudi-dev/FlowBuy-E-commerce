// import 
import { Package, Plus } from "lucide-react";
import "./style.css";
import ButtonCard from "../../../components/Buttons/ButtonAddProduct";

// state
import { useEffect } from 'react';

export default function HomeSeller() {

    useEffect(() =>{
        document.documentElement.classList.add("container-home-seller");
        return () => document.documentElement.classList.remove("container-home-seller")
    }, [])
    
    return (
      <div className="container-home-seller">
        <div id="structure-home-seller">
          <div id="empty-product">
            <div className="icon-box">
              <Package className="icon-Pack" />
            </div>
            <p>
              Comece a vender adicionando seu primeiro produto. Você poderá
              gerenciar preços, estoque e informações detalhadas.
            </p>
           <ButtonCard/>
          </div>
        </div>
      </div>
    );
}