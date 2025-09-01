// imports
import './Login.css'
import { Link } from "react-router-dom";


// states
import { useEffect } from "react";

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from 'lucide-react';

export default function Login(){
  useEffect(() =>{
    document.documentElement.classList.add("container");
    return () => document.documentElement.classList.remove("container");
  }, [])


  
    return (
      <div className="container">
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
              {/* <label htmlFor="email"></label> */}
              <input
                type="email"
                id="email"
                placeholder="Digite o seu E-mail..."
              />
              <Mail className="icon" />
            </div>
            <div className="form-control">
              {/* <label htmlFor="senha"></label> */}
              <input
                type="password"
                id="password"
                placeholder="Digite a sua senha..."
              />
              <LockKeyhole className="icon" />
            </div>
            <div id="button-login">
              <button id="registration">Login</button>
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
      </div>
    );
}