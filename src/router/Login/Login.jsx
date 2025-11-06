// imports
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

// states
import { useEffect, useState } from "react";

// Icons
import { Bold, LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { validationLogin } from "../../Services/Services_Ecommerce/Post/postLogin";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../components/Alert/alert";

export default function Login() {
  const [emailLogin, setemailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const [useRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("container");
    return () => document.documentElement.classList.remove("container");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dataLogin = await validationLogin({
        Email: emailLogin,
        Senha: passwordLogin,
      });

      if (dataLogin.role === "Seller") {
        const sellerId = sessionStorage.getItem("sellerId");
        console.log("ID do seller:", sellerId);
        setUserRole("Vendedor");
          setSnackMessage("Bem vindo Vendedor");
        }  else {
          setUserRole("Comprador");
          setSnackMessage("Bem vindo Comprador");
        }

        setSnackSeverity("success");
        setOpenSnack(true);
        await new Promise((time) => setTimeout(time, 4000));

        if(dataLogin.role === "Seller"){
          navigate("/Seller");
        } else {
          navigate("/Buyer");
        }
      } 
      catch (error) {
      setSnackMessage(
        error.response?.data?.message ||
          "Erro ao fazer login. Verifique suas credenciais."
      );
      setSnackSeverity("error");
      setOpenSnack(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <form onSubmit={handleLogin} className="container">
      <div id="register-container">
        <div id="register-banner">
          <div id="banner-layer">
            <h1>Seja Bem-vindo</h1>
          </div>
        </div>
        <div id="register-forms">
          <h2>Faça o seu Login!</h2>
          <p>
            Faça o seu Login para ter acesso ao <strong>E-comerce</strong>
          </p>
          <div className="form-control">
            <input
              type="email"
              id="email"
              placeholder="Digite o seu E-mail..."
              value={emailLogin}
              onChange={(e) => setemailLogin(e.target.value)}
            />
            <Mail className="icon" />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha..."
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <LockKeyhole className="icon" />
          </div>
          <div id="button-login">
            <button type="submit" id="registration">
              Login
            </button>
          </div>
          <div id="other-registration">
            <Link className="registration" to="/Buyer/Login">
              Cadastrar
            </Link>
            <Link className="registration-seller" to="/Seller/Login">
              Cadastrar como vendedor
            </Link>
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
          sx={{ width: "100%" }}
        >
          <p style={{ color: "#fff" }}>
            {snackMessage}
          </p>
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
          Carregando...
          {useRole && ` Acessando como ${useRole}`}
        </p>
      </Backdrop>
    </form>
  );
}
