import "./LoginBuyer.css";

// states
import { useEffect } from "react";

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { User } from 'lucide-react';


export default function LoginBuyer() {

  useEffect(() => {
      document.documentElement.classList.add("container-buyer");
      return () => document.documentElement.classList.remove("container-buyer");
    }, []);

  return (
    <div className="container-buyer">
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
            {/* <label htmlFor="email"></label> */}
            <input type="name" id="name" placeholder="Digite o seu Nome..." />
            <User className="icon" />
          </div>
          <div className="form-control-buyer">
            {/* <label htmlFor="email"></label> */}
            <input
              type="tel"
              id="number"
              placeholder="Digite o seu Numero..."
            />
            <Phone className="icon" />
          </div>
          <div className="form-control-buyer">
            {/* <label htmlFor="email"></label> */}
            <input
              type="email"
              id="email"
              placeholder="Digite o seu E-mail..."
            />
            <Mail className="icon" />
          </div>
          <div className="form-control-buyer">
            {/* <label htmlFor="senha"></label> */}
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha..."
            />
            <LockKeyhole className="icon" />
          </div>
          <div id="button-login-buyer">
            <button id="registration-buyer">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
