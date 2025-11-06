// import
import React, { useCallback, useEffect, useState } from "react";
import "./style.css";

// Components
import BasicInformation from "../ComponentsSeller/BasicInformation";
import ImageProduct from "../ComponentsSeller/IamgeProduct";
import PriceProduct from "../ComponentsSeller/PriceProduct";
import StockProduct from "../ComponentsSeller/StockProduct";
import ButtonCreateProduct from "../../../components/Buttons/ButtonCreateProduct";
import { CreateProduct } from "../../../Services/Services_Ecommerce/Post/postCreateProduct";
import useAuth from "../../../hooks/UseAuth";

// MUI/MATERIAL

import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../../components/Alert/alert";

export default function RegisterProduct() {
  const [productImage, setProductImage] = useState([]);
  const [priceProduct, setPriceProduct] = useState({});
  const [basicInfoProduct, setBasicInfoProduct] = useState({});
  const [stockProduct, setStockProduct] = useState({});
  const { seller } = useAuth();
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const [resetForm, setResetForm] = useState(false);  

  useEffect(() => {
    document.documentElement.classList.add("container-register-product");
    return () =>
      document.documentElement.classList.remove("container-register-product");
  });

  const infoImageChange = (images) => {
    setProductImage(images);
  };

  const infoToBasicInformation = useCallback(async (info) => {
    setBasicInfoProduct(info);
  }, []);

  const infoToPriceProduct = async (infoPrice) => {
    setPriceProduct(infoPrice);
  };

  const infoToStockProduct = async (infoStock) => {
    setStockProduct(infoStock);
  };

  const handleCreateProduct = async () => {
    const fornecedorId = seller?.fornecedorId;
    const imagemPrincipal = productImage[0];

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
      ImagemPrincipalBase64: imagemPrincipal.url,
      CorNomePrincipal: imagemPrincipal?.colorName || "",
      CorCodigoPrincipal: imagemPrincipal?.colorHex || "",
      QuantidadeInicial: stockProduct.quantidadeInicial,
      FornecedorId: fornecedorId,
      Variacoes: variacoes,
    };

      setLoading(true);
    try {
      console.log("basicInfoProduct:", basicInfoProduct);
      console.log("priceProduct:", priceProduct);
      const response = await CreateProduct(body);
      console.log("produto criado", response);

      await new Promise((time) => setTimeout(time, 4000));

      if (!response) {
        setSnackMessage("Erro ao criar o produto. Tente novamente.");
        setSnackSeverity("error");
        
      } else {
        setSnackMessage("Produto criado com sucesso!");
        setSnackSeverity("success");
        
      }

      setOpenSnack(true);
      setProductImage([]);
      setBasicInfoProduct({});
      setPriceProduct({});
      setStockProduct({});
      setResetForm(true);

    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }

    setLoading(false);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };
  return (
    <div id="container-register-product">
      <div className="structure-register-product">
        <h2>Cadastro de Produto</h2>
        <p>Preencha todas as informações do produto para ser cadastrado</p>
        <div className="form-register-product">
          <BasicInformation
            onCreateBasicInfo={infoToBasicInformation}
            reset={resetForm}
          />
          <div className="teste">
            <div className="teste1">
              <PriceProduct
                onCreatePrice={infoToPriceProduct}
                reset={resetForm}
              />
            </div>
            <div className="teste1">
              <StockProduct onCreateStock={infoToStockProduct} reset={resetForm}/>
            </div>
            <div>
              <ButtonCreateProduct onSubmitCreate={handleCreateProduct} />
            </div>
          </div>
        </div>
        <ImageProduct onImageChange={infoImageChange} reset={resetForm} />
      </div>

      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={snackSeverity}
          sx={{ color: "#fff", width: "100%" }}
        >
          <p style={{ color: "#fff" }}>{snackMessage}</p>
        </Alert>
      </Snackbar>

      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress color="success" />
        <p style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "Bold" }}>
          Criando Produto...
        </p>
      </Backdrop>
    </div>
  );
}
