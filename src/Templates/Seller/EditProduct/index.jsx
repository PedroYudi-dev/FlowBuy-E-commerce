// import
import React, { useCallback, useEffect, useState } from "react";
import "./style.css";

// Components
import BasicInformation from "../ComponentsSeller/BasicInformation";
import ImageProduct from "../ComponentsSeller/IamgeProduct";
import PriceProduct from "../ComponentsSeller/PriceProduct";
import StockProduct from "../ComponentsSeller/StockProduct";
import ButtonCreateProduct from "../../../components/Buttons/ButtonCreateProduct";
// import { CreateProduct } from "../../../Services/Services_Ecommerce/Post/postCreateProduct";
import useAuth from "../../../hooks/UseAuth";

// MUI/MATERIAL

import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../../components/Alert/alert";
import { useParams } from "react-router-dom";
import ButtonEditProduct from "../../../components/Buttons/ButtonEditProduct";
import { EditProduct } from "../../../Services/Services_Ecommerce/Patch/PacthEditProduct";

export default function EditProductSingle() {
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
  const { id } = useParams();

  useEffect(() => {
    document.documentElement.classList.add("container-Edit-product");
    return () =>
      document.documentElement.classList.remove("container-Edit-product");
  });

  const infoImageChange = (images) => {
    setProductImage(images);
  };

  const infoToBasicInformation = useCallback(async (info) => {
    setBasicInfoProduct(info);
  }, []);

  // const infoToPriceProduct = async (infoPrice) => {
  //   setPriceProduct(infoPrice);
  // };

  // const infoToStockProduct = async (infoStock) => {
  //   setStockProduct(infoStock);
  // };

  const handleEditProduct = async () => {
    const fornecedorId = seller?.fornecedorId;
    const imagemPrincipal = productImage[0];

    const variacoes = productImage.map((img) => ({
      Id: img.id,
      CorNome: img.colorName,
      CorCodigo: img.colorHex,
      ImagemBase64: img.url,
      Preco: img.price,
      QuantidadeEstoque: img.stock,
    }));

    const body = {
      Nome: basicInfoProduct.Nome,
      Preco: priceProduct.Preco ?? basicInfoProduct.Preco ?? 0,
      Descricao: basicInfoProduct.Descricao,
      Marca: basicInfoProduct.Marca,
      ImagemPrincipalBase64: imagemPrincipal?.url,
      CorNomePrincipal: imagemPrincipal?.colorName || "",
      CorCodigoPrincipal: imagemPrincipal?.colorHex || "",
      QuantidadeInicial: stockProduct.QuantidadeInicial ?? 0,
      FornecedorId: fornecedorId,
      Variacoes: variacoes,
    };

    setLoading(true);
    try {
      console.log("basicInfoProduct:", basicInfoProduct);
      console.log("priceProduct:", priceProduct);
      const response = await EditProduct(id, body);
      console.log("produto Editado", response);

      await new Promise((time) => setTimeout(time, 4000));

      if (!response) {
        setSnackMessage("Erro ao Editar o produto. Tente novamente.");
        setSnackSeverity("error");
      } else {
        setSnackMessage("Produto Editado com sucesso!");
        setSnackSeverity("success");
      }

      setOpenSnack(true);
      setProductImage([]);
      setBasicInfoProduct({});
      setPriceProduct({});
      setStockProduct({});
      setResetForm(true);
    } catch (error) {
      console.error("Erro ao Editar o produto:", error);
    }

    setLoading(false);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };
  return (
    <div id="container-Edit-product">
      <div className="structure-Edit-product">
        <h2>Editar Produto</h2>
        <p>Faça as alterações do seu produto</p>
        <div className="form-Edit-product">
          <BasicInformation
            onCreateBasicInfo={infoToBasicInformation}
            reset={resetForm}
          />
          <div className="testeEdit">
            {/* <div className="testeEdit1">
              <PriceProduct
                onCreatePrice={infoToPriceProduct}
                reset={resetForm}
              />
            </div> */}
            {/* <div className="testeEdit1">
              <StockProduct
                onCreateStock={infoToStockProduct}
                reset={resetForm}
              />
            </div> */}
          </div>
          <ImageProduct onImageChange={infoImageChange} reset={resetForm} />
          <div>
            <ButtonEditProduct
              text={"Editar Produto"}
              onSubmitEdit={handleEditProduct}
            />
          </div>
        </div>
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
          Editando Produto...
        </p>
      </Backdrop>
    </div>
  );
}
