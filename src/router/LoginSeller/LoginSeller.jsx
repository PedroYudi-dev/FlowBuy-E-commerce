import './LoginSeller.css'

// states
import { useEffect } from 'react';

// Icons
import { LockKeyhole } from "lucide-react";
import { Mail } from 'lucide-react';
import { User } from "lucide-react";
import { Phone } from "lucide-react";



export default function LoginSell(){

  useEffect(() => {
    document.documentElement.classList.add("container-seller");
    return () => document.documentElement.classList.remove("container-seller");
  }, []);

    return (
      <div className="container-seller">
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
              {/* <label htmlFor="email"></label> */}
              <input type="name" id="name" placeholder="Digite o seu Nome..." />
              <User className="icon" />
            </div>
            <div className="form-control-seller">
              {/* <label htmlFor="email"></label> */}
              <input type="name" id="cnpj" placeholder="Digite o cnpj..." />
              <User className="icon" />
            </div>
            <div className="form-control-seller">
              {/* <label htmlFor="email"></label> */}
              <input
                type="tel"
                id="phone"
                placeholder="Digite o seu Celular..."
              />
              <Phone className="icon" />
            </div>
            <div className="form-control-seller">
              {/* <label htmlFor="email"></label> */}
              <input
                type="email"
                id="email"
                placeholder="Digite o seu E-mail..."
              />
              <Mail className="icon" />
            </div>
            <div className="form-control-seller">
              {/* <label htmlFor="senha"></label> */}
              <input
                type="password"
                id="password"
                placeholder="Digite a sua senha..."
              />
              <LockKeyhole className="icon" />
            </div>
            <div id="button-login-seller">
              <button id="registration-seller">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    );
}