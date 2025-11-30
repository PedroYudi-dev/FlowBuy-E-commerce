// import
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import "./style.css";
import { Alert } from "../../Alert/alert";
import { useNavigate } from "react-router-dom";
import { AddProductToCart } from "../../../Services/Services_Ecommerce/Post/postAddProductCart";
import { useState } from "react";

// state

export default function ButtonCard({ variationId }) {
  // const [openSnack, setOpenSnack] = useState(false);
  // const [snackMessage, setSnackMessage] = useState("");
  // const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const heandleAddProductCart = async() => {
    setLoading(true);
    try{
      const user = JSON.parse(sessionStorage.getItem("Buyer"));
      const clientId = Number(user?.clienteId);
      
      const body = {
        usuarioId: clientId,
        variacaoId: variationId,
        quantidade: 1,
      };

      const cartProduct = await AddProductToCart(body)
      if(cartProduct){
        navigate("/Buyer/ShoppingCart");
      }
      if (!user) {
        console.log(`O produto ${variationId} não foi adicionado ao carrinho`);
        navigate("/login")
        return
      }
    }catch(err){
      console.log(err, "Erro ao adicionar produto ao carrinho")
    }
    setLoading(false);
  };

  // const handleCloseSnack = (event, reason) => {
  //   if (reason === "clickaway") return;
  //   setOpenSnack(false);
  // };

  return (
    <>
      <button className="car-product" onClick={heandleAddProductCart}>
        Adicionar ao Carrinho
      </button>

      {/* <Snackbar
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
      </Snackbar> */}

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
          Adicionando ao carrinho...
        </p>
      </Backdrop>
    </>
  );
}
