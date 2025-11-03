// imports
import './Login.css'
import { Link, useNavigate } from "react-router-dom";


// states
import { useEffect, useState } from "react";

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from 'lucide-react';
import { validationLogin } from '../../Services/Services_Ecommerce/Post/postLogin';

export default function Login(){

  const [emailLogin, setemailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("")
  const navigate = useNavigate()

  useEffect(() =>{
    document.documentElement.classList.add("container");
    return () => document.documentElement.classList.remove("container");
  }, [])

  const handleLogin = async (e) =>{
    e.preventDefault()
    try{
      const dataLogin = await validationLogin({
        Email: emailLogin,
        Senha: passwordLogin,
      });

      if(dataLogin.role === "Seller"){
        const sellerId = sessionStorage.getItem("sellerId");
        console.log("ID do seller:", sellerId);
        navigate("/Seller")
        alert("Bem vindo Vendedor")
      }else if (dataLogin.role === "Buyer") {
        navigate("/Buyer");
        alert("Bem vindo Comprador");
      } else {
        alert("Infelizmente você não pode fazer o login");
      }
    }catch(error){
      alert("Não foi possivel acessar o seu login", error)
    }
  } 
  
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
              <button type='submit' id="registration">Login</button>
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
      </form>
    );
}