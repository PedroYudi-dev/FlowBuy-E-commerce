import "./LoginBuyer.css";

// states
import { useEffect, useState } from "react";

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { User } from "lucide-react";
import { createBuyer } from "../../Services/Services_Ecommerce/Post/postLoginBuyer";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../components/Alert/alert";

export default function LoginBuyer() {
  const [nameBuyer, setNameBuyer] = useState("");
  const [nameBuyerError, setNameBuyerError] = useState("");
  const [cpfBuyer, setCpfBuyer] = useState("");
  const [cpfBuyerError, setCnpjBuyerError] = useState("");
  const [emailBuyer, setEmailBuyer] = useState("");
  const [emailBuyerError, setEmailByuerError] = useState("");
  const [passwordBuyer, setPasswordBuyer] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [snackMessage, setSnackMessage] = useState("");
  


  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("container-buyer");
    return () => document.documentElement.classList.remove("container-buyer");
  }, []);

  const handleRegisterByuer = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataCreate = await createBuyer({
        Nome: nameBuyer,
        Cpf: cpfBuyer,
        Email: emailBuyer,
        Senha: passwordBuyer,
      });

      if (dataCreate) {
        setSnackMessage("Cadastro realizado");
        setSnackSeverity("success");
        navigate(`/login`);
      } else {
        setSnackMessage("Houce um erro com o seu cadastro");
        setSnackSeverity("error");
      }
      setOpenSnack(true);
      await new Promise((time) => setTimeout(time, 4000));
      console.log("Cliente criado:", dataCreate);
    } catch (error) {
      setSnackMessage(
        "Erro ao criar Cliente. Verifique os dados e tente novamente."
      );
      setSnackSeverity("error");
      console.error(" Erro ao criar Cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  //  VALIDAÇÕES DOS INPUTS
  const handleValidationLoginNameBuyuer = (e) => {
    const nameLoginValue = String(e.target.value);

    if (!nameLoginValue.trim()) {
      setNameBuyerError("O nome é Obrgatório");
    } else if (nameLoginValue.length <= 3) {
      setNameBuyerError("O nome deve conter pelo menos 3 caracteres!");
    } else if (nameLoginValue.length >= 100) {
      setNameBuyerError(
        "O nome deve conter pelo menos no maximo 100 caracteres!"
      );
    } else if (!/^[a-zA-Z0-9\s\-()]+$/.test(nameLoginValue)) {
      setNameBuyerError("O nome contém caracteres inválidos.");
    } else {
      setNameBuyerError("");
    }
    setNameBuyer(e.target.value);
  };

  const handleValidationLoginCPF = (e) => {
    const CpfLoginValue = e.target.value.replace(/\D/g, "");

    setCpfBuyer(CpfLoginValue);

    if (!CpfLoginValue.trim()) {
      setCnpjBuyerError("O CPF é Obrgatório");
    } else if (CpfLoginValue.length != 11) {
      setCnpjBuyerError("O CPF deve conter exatamente 11 dígitos!");
    } else if (!/^[0-9]+$/.test(CpfLoginValue)) {
      setCnpjBuyerError("O CPF deve conter apenas números!");
    } else {
      setCnpjBuyerError("");
    }
  };

  const handleValidationLoginEmailBuyer = (e) => {
    const EmailLoginValue = String(e.target.value);

    if (!EmailLoginValue.trim()) {
      setEmailByuerError("O Email é Obrgatório");
    } else if (EmailLoginValue.length <= 3) {
      setEmailByuerError("O Email deve conter pelo menos 3 caracteres!");
    } else {
      setEmailByuerError("");
    }
    setEmailBuyer(e.target.value);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <form onSubmit={handleRegisterByuer} className="container-buyer">
      <div id="register-container-buyer">
        <div id="register-banner-buyer">
          <div id="banner-layer-buyer">
            <h1>Seja Bem-vindo</h1>
          </div>
        </div>
        <div id="register-forms-buyer">
          <h2>Crie sua conta!</h2>
          <p>
            Faça o seu Login para ter um <strong>Acesso</strong> ao{" "}
            <strong>Site</strong>
          </p>
          <div className="form-control-buyer">
            <input
              type="name"
              id="name"
              placeholder="Digite o seu Nome..."
              value={nameBuyer}
              onChange={handleValidationLoginNameBuyuer}
            />
            <User className="icon" />
            {nameBuyer && <p style={{ color: "red" }}>{nameBuyerError}</p>}
          </div>
          <div className="form-control-buyer">
            <input
              type="tel"
              id="cpf"
              placeholder="000.000.000-00"
              maxLength="11"
              value={cpfBuyer}
              onChange={handleValidationLoginCPF}
            />
            <User className="icon" />
            {cpfBuyer && <p style={{ color: "red" }}>{cpfBuyerError}</p>}
          </div>
          <div className="form-control-buyer">
            <input
              type="email"
              id="email"
              placeholder="Digite o seu E-mail..."
              value={emailBuyer}
              onChange={handleValidationLoginEmailBuyer}
            />
            <Mail className="icon" />
            {emailBuyer && <p style={{ color: "red" }}>{emailBuyerError}</p>}
          </div>
          <div className="form-control-buyer">
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha..."
              value={passwordBuyer}
              onChange={(e) => setPasswordBuyer(e.target.value)}
            />
            <LockKeyhole className="icon" />
          </div>
          <div id="button-login-buyer">
            <button id="registration-buyer" type="submit">
              Cadastrar
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
          Cadastrando comprador...
        </p>
      </Backdrop>
    </form>
  );
}
