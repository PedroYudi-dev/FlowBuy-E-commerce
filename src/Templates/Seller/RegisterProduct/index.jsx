// import
import { useEffect, useState } from "react"
import "./style.css"

// Components
import BasicInformation from "../ComponentsSeller/BasicInformation";
import ImageProduct from "../ComponentsSeller/IamgeProduct";
import PriceProduct from "../ComponentsSeller/PriceProduct";
import StockProduct from "../ComponentsSeller/StockProduct";
import ButtonCreateProduct from "../../../components/Buttons/ButtonCreateProduct";

export default function RegisterProduct() {

    const [productImage, setProductImage] = useState([])
    const [priceProduct, setPriceProduct] = useState({})
    const [basicInfoProduct, setBasicInfoProduct] = useState({});
    const [stockProduct, setStockProduct] = useState({});

    useEffect(() =>{
        document.documentElement.classList.add("container-register-product");
        return () => document.documentElement.classList.remove("container-register-product")
    })

    const handleImageChange = (images) => {
      setProductImage(images)
    }

    const handleCreateProduct = async () =>{
      const body = {
        nome: basicInfoProduct.Nome,
        preco: priceProduct.Preco,
        fornecedorId: 1,
        imagem1_base64: productImage[0].url,
        imagem1_cor_nome: productImage[0].colorName,
        imagem1_cor_codigo: productImage[0].colorHex,
        
        imagem2_base64: productImage[1].url,
        imagem2_cor_nome: productImage[1].colorName,
        imagem2_cor_codigo: productImage[1].colorHex,

        imagem3_base64: productImage[2].url,
        imagem3_cor_nome: productImage[2].colorName,
        imagem3_cor_codigo: productImage[2].colorHex,

      };
    }

    return (
      <div id="container-register-product">
        <div className="structure-register-product">
          <h2>Cadastro de Produto</h2>
          <p>Preencha todas as informações do produto para ser cadastrado</p>
          <div className="form-register-product">
            <BasicInformation />
            <div className="teste">
              <div className="teste1">
                <PriceProduct />
              </div>
              <div className="teste1">
                <StockProduct />
              </div>
              <div>
                <ButtonCreateProduct />
              </div>
            </div>
          </div>
          <ImageProduct onImageChange={handleImageChange} />
        </div>
      </div>
    );
}