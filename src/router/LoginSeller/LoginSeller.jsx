import './LoginSeller.css'

// states
import { useEffect, useState } from 'react';

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from 'lucide-react';
import { User } from "lucide-react";
import { createSeller } from '../../Services/Services_Ecommerce/Post/postLoginSeller';
import { useNavigate } from 'react-router-dom';



export default function LoginSell(){

  const [name, setName] =useState("")
  const [nameError, setNameError] =useState("")
  const [cnpj, setCnpj] =useState("")
  const [cnpjError, setCnpjError] =useState("")
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.classList.add("container-seller");
    return () => document.documentElement.classList.remove("container-seller");
  }, []);

   const handleRegister = async (e) => {
    e.preventDefault() 
    try {
       const dataCreate = await createSeller({
         Nome: name,
         Cnpj: cnpj,
         Email: email,
         Senha: password,
       });

       if(dataCreate){
        navigate(`/login`);
        }else{
          alert("Erro ao cadastrar vendedor. Tente novamente.");
        }

       console.log("Vendedor criado:", dataCreate);
     } catch (error) {
       console.error(" Erro ao criar vendedor:", error);
       alert("Erro ao criar vendedor. Verifique os dados e tente novamente.");
     }
   };

  //  VALIDAÇÕES DOS INPUTS 
  const handleValidationLoginName = (e) => {
    const nameLoginValue = String(e.target.value);
    const errors = [];

    if (!nameLoginValue.trim()) {
      errors.push("O nome é obrigatório!");
    }
    if (nameLoginValue.length < 3) {
      errors.push("O nome deve conter pelo menos 3 caracteres!");
    }
    if (nameLoginValue.length > 100) {
      errors.push("O nome deve conter no máximo 100 caracteres!");
    }
    if (!/^[a-zA-Z0-9\s\-()]+$/.test(nameLoginValue)) {
      errors.push("O nome contém caracteres inválidos.");
    }

    setNameError(errors);
    setName(nameLoginValue);
  };

  const handleValidationLoginCNPJ = (e) =>{
    const CnpjLoginValue = e.target.value.replace(/\D/g, "");

    setCnpj(CnpjLoginValue)

    if (!CnpjLoginValue.trim()) {
      setCnpjError("O Cnpj é Obrgatório");
    } else if (CnpjLoginValue.length != 14) {
      setCnpjError("O CNPJ deve conter exatamente 14 dígitos!");
    } else if (!/^[0-9]+$/.test(CnpjLoginValue)) {
      setCnpjError("O CNPJ deve conter apenas números!");
    } else {
      setCnpjError("");
    }
  }

  const handleValidationLoginEmail = (e) =>{
    const EmailLoginValue = String(e.target.value)

    if (!EmailLoginValue.trim()) {
      setEmailError("O Email é Obrgatório");
    } else if (EmailLoginValue.length <= 3) {
      setEmailError("O Email deve conter pelo menos 3 caracteres!");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  }

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
                placeholder={nameError ? nameError : "Digite o seu Nome..."}
                value={name}
                onChange={handleValidationLoginName}
                style={{
                  borderColor: nameError ? "red" : "#423524",
                  color: nameError ? "red" : "#333",
                }}
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
              {cnpj && <p style={{ color: "red" }}>{cnpjError}</p>}
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
              {email && <p style={{ color: "red" }}>{emailError}</p>}
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
      </form>
    );
}