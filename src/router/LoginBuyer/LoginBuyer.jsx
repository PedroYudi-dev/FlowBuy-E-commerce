import "./LoginBuyer.css";

// states
import { useEffect, useState } from "react";

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { User } from 'lucide-react';
import { createBuyer } from "../../Services/Services_Ecommerce/Post/postLoginBuyer";
import { useNavigate } from "react-router-dom";


export default function LoginBuyer() {

    const [nameBuyer, setNameBuyer] =useState("")
    const [nameBuyerError, setNameBuyerError] =useState("")
    const [cpfBuyer, setCpfBuyer] =useState("")
    const [cpfBuyerError, setCnpjBuyerError] =useState("")
    const [emailBuyer, setEmailBuyer] = useState("");
    const [emailBuyerError, setEmailByuerError] = useState("");
    const [passwordBuyer, setPasswordBuyer] = useState("");
    const navigate = useNavigate()

  useEffect(() => {
      document.documentElement.classList.add("container-buyer");
      return () => document.documentElement.classList.remove("container-buyer");
    }, []);

    const handleRegisterByuer = async (e) => {
        e.preventDefault() 
        try {
           const dataCreate = await createBuyer({
             Nome: nameBuyer,
             Cpf: cpfBuyer,
             Email: emailBuyer,
             Senha: passwordBuyer,
           });
    
           if(dataCreate){
            navigate(`/login`);
            }else{
              alert("Erro ao cadastrar Cliente. Tente novamente.");
            }
    
           console.log("Cliente criado:", dataCreate);
         } catch (error) {
           console.error(" Erro ao criar Cliente:", error);
           alert("Erro ao criar Cliente. Verifique os dados e tente novamente.");
         }
       };
    
      //  VALIDAÇÕES DOS INPUTS 
      const handleValidationLoginNameBuyuer = (e) =>{
        const nameLoginValue = String(e.target.value)
    
        if(!nameLoginValue.trim()){
          setNameBuyerError("O nome é Obrgatório")
        }else if(nameLoginValue.length <= 3){
          setNameBuyerError("O nome deve conter pelo menos 3 caracteres!");
        }else if(nameLoginValue.length >= 100){
          setNameBuyerError("O nome deve conter pelo menos no maximo 100 caracteres!");
        }else if (!/^[a-zA-Z0-9\s\-()]+$/.test(nameLoginValue)) {
          setNameBuyerError("O nome contém caracteres inválidos.");
        }else{
          setNameBuyerError("")
        }
        setNameBuyer(e.target.value);
      }
    
      const handleValidationLoginCPF = (e) =>{
        const CpfLoginValue = e.target.value.replace(/\D/g, "");
    
        setCpfBuyer(CpfLoginValue)
    
        if (!CpfLoginValue.trim()) {
          setCnpjBuyerError("O CPF é Obrgatório");
        } else if (CpfLoginValue.length != 11) {
          setCnpjBuyerError("O CPF deve conter exatamente 11 dígitos!");
        } else if (!/^[0-9]+$/.test(CpfLoginValue)) {
          setCnpjBuyerError("O CPF deve conter apenas números!");
        } else {
          setCnpjBuyerError("");
        }
      }
    
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
              placeholder="Digite o seu Numero..."
              maxLength="11"
              value={cpfBuyer}
              onChange={handleValidationLoginCPF}
            />
            <Phone className="icon" />
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
            <button id="registration-buyer" type="submit">Cadastrar</button>
          </div>
        </div>
      </div>
    </form>
  );
}
