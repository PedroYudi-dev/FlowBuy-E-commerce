// import
import { useEffect, useState } from "react"
import "./style.css"

// Components
import BasicInformation from "../ComponentsSeller/BasicInformation";
import ImageProduct from "../ComponentsSeller/IamgeProduct";
import PriceProduct from "../ComponentsSeller/PriceProduct";
import StockProduct from "../ComponentsSeller/StockProduct";
import ButtonCreateProduct from "../../../components/Buttons/ButtonCreateProduct";
import { CreateProduct } from "../../../Services/Services_Ecommerce/Post/postCreateProduct";
import useAuth from "../../../hooks/UseAuth";

export default function RegisterProduct() {

    const [productImage, setProductImage] = useState([])
    const [priceProduct, setPriceProduct] = useState({})
    const [basicInfoProduct, setBasicInfoProduct] = useState({});
    const [stockProduct, setStockProduct] = useState({});
    const {seller} = useAuth()

    useEffect(() =>{
        document.documentElement.classList.add("container-register-product");
        return () => document.documentElement.classList.remove("container-register-product")
    })

    const infoImageChange = (images) => {
      setProductImage(images)
    }

    const infoToBasicInformation = async (info) => {
      setBasicInfoProduct(info);
    };

    const infoToPriceProduct = async (infoPrice) => {
      setPriceProduct(infoPrice);
    };

    const infoToStockProduct = async (infoStock) => {
      setStockProduct(infoStock);
    };

    const handleCreateProduct = async () =>{

      const fornecedorId = seller?.fornecedorId

      const variacoes = productImage.map((img) => ({
        CorNome: img.colorName,
        CorCodigo: img.colorHex,
        ImagemBase64: img.url,
      }));

      const body = {
        Nome: basicInfoProduct.Nome,
        Preco: priceProduct.Preco,
        Descricao: basicInfoProduct.Descricao,
        Marca: basicInfoProduct.Marca,
        estoque: stockProduct.QuantidadeInicial,
        FornecedorId: fornecedorId,
        Variacoes: variacoes,
      };
      
      try{
          console.log("basicInfoProduct:", basicInfoProduct);
console.log("priceProduct:", priceProduct);
        const response = await CreateProduct(body)
        console.log("produto criado", response)
      }catch(error){
        console.error("Erro ao criar o produto:", error)
      }
    }

    return (
      <div id="container-register-product">
        <div className="structure-register-product">
          <h2>Cadastro de Produto</h2>
          <p>Preencha todas as informações do produto para ser cadastrado</p>
          <div className="form-register-product">
            <BasicInformation onCreateBasicInfo={infoToBasicInformation} />
            <div className="teste">
              <div className="teste1">
                <PriceProduct onCreatePrice={infoToPriceProduct} />
              </div>
              <div className="teste1">
                <StockProduct onCreateStock={infoToStockProduct} />
              </div>
              <div>
                <ButtonCreateProduct onSubmitCreate={handleCreateProduct} />
              </div>
            </div>
          </div>
          <ImageProduct onImageChange={infoImageChange} />
        </div>
      </div>
    );
}