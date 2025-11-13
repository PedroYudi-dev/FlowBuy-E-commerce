import { Trash2, X } from "lucide-react";
import "./style.css"

export default function SellectionProductsInCart(){
    return (
      <div id="ContainerCartInProduct">
        <div className="structureCart">
          <div className="detaliesPorductCart">
            <img src="/Images_Category/Iphone 17.png" alt="Apple" />
            <div>
              <label htmlFor="">fone de ouvido</label>
              <div className="colorProductInCart">
                <p>Prata</p>
              </div>
            </div>
          </div>
          <div className="InfoProductValue">
            <p>R$2999,00</p>
            <input type="number" />
            <div className="RemoveProductInCart">
              <Trash2 color="red" />
              <p>Remover</p>
            </div>
          </div>
        </div>
      </div>
    );
} 