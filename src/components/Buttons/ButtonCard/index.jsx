// import
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import "./style.css";
import { Alert } from "../../Alert/alert";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// state

export default function ButtonCard({ productId }) {
  // const [openSnack, setOpenSnack] = useState(false);
  // const [snackMessage, setSnackMessage] = useState("");
  // const [snackSeverity, setSnackSeverity] = useState("success");
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const heandleCheckUser = () => {
    const user = sessionStorage.getItem("Buyer");

    if (!user) {
      console.log(`O produto ${productId} não foi adicionado ao carrinho`);
      navigate("/login")
      return
    }

  };

  // const handleCloseSnack = (event, reason) => {
  //   if (reason === "clickaway") return;
  //   setOpenSnack(false);
  // };

  return (
    <>
      <button className="car-product" onClick={heandleCheckUser}>Adicionar ao Carrinho</button>

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

      {/* <Backdrop
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
          Carregando Produto...
        </p>
      </Backdrop> */}
    </>
  );
}
