import "./LoginSeller.css";

// states
import { useEffect, useState } from "react";

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { createSeller } from "../../Services/Services_Ecommerce/Post/postLoginSeller";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../components/Alert/alert";

export default function LoginSell() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [snackMessage, setSnackMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("container-seller");
    return () => document.documentElement.classList.remove("container-seller");
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataCreate = await createSeller({
        Nome: name,
        Cnpj: cnpj,
        Email: email,
        Senha: password,
      });

      if (dataCreate) {
        setSnackMessage("Cadastro realizado");
        setSnackSeverity("success");
        navigate(`/login`);
      } else {
        setSnackMessage("Houce um erro com o seu cadastro");
        setSnackSeverity("error");
      }

      console.log("Vendedor criado:", dataCreate);
    } catch (error) {
      console.error(" Erro ao criar vendedor:", error);
      setSnackMessage(
        "Erro ao criar Vendedor. Verifique os dados e tente novamente."
      );
      setSnackSeverity("error");
    }

    setLoading(false);
  };

  //  VALIDAÇÕES DOS INPUTS
  const handleValidationLoginName = (e) => {
    const nameLoginValue = String(e.target.value);
    

    setName(nameLoginValue);
  };

  const handleValidationLoginCNPJ = (e) => {
    const CnpjLoginValue = e.target.value.replace(/\D/g, "");

    setCnpj(CnpjLoginValue);

   
  };

  const handleValidationLoginEmail = (e) => {
    const EmailLoginValue = String(e.target.value);

    setEmail(e.target.value);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <form onSubmit={handleRegister} className="container-seller">
      <div id="register-container-seller">
        <div id="register-banner-seller">
          <div id="banner-layer-seller">
            <h1>Seja Bem-vindo</h1>
          </div>
        </div>
        <div id="register-forms-seller">
          <h2>Seja um Vendedor!</h2>
          <p>
            Faça o seu Login para ser um <strong>Vendedor</strong>
          </p>
          <div className="form-control-seller">
            <input
              type="name"
              id="name"
              placeholder={ "Digite o seu Nome..."}
              value={name}
              onChange={handleValidationLoginName}
              
            />
            <User className="icon" />
          </div>
          <div className="form-control-seller">
            <input
              type="tel"
              id="cnpj"
              placeholder="00.000.000/0000-00"
              value={cnpj}
              maxLength="14"
              onChange={handleValidationLoginCNPJ}
            />
            <User className="icon" />
          </div>
          <div className="form-control-seller">
            <input
              type="email"
              id="email"
              placeholder="Digite o seu E-mail..."
              value={email}
              onChange={handleValidationLoginEmail}
            />
            <Mail className="icon" />
          </div>
          <div className="form-control-seller">
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockKeyhole className="icon" />
          </div>
          <div id="button-login-seller">
            <button id="registration-seller" type="submit">
              <p>Cadastrar</p>
            </button>
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
          Cadastrando Vendedor...
        </p>
      </Backdrop>
    </form>
  );
}
