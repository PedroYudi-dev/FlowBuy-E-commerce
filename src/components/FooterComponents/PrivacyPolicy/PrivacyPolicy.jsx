// import
import "./PrivacyPolicy.css";

// state
import { useEffect } from "react";

export default function PrivacyPolicy(){

  useEffect(() => {
    document.documentElement.classList.add("conatiner-policy")
    return () => document.documentElement.classList.remove("conatiner-policy");
  })
    return (
      <>
        <div className="container-policy">
          <div id="conatiner-PrivacyPolicy">
            <h1>Política de Privacidade</h1>
            <p>
              Na FlowBuy a sua privacidade é prioridade. Coletamos apenas as
              informações necessárias para processar pedidos, realizar entregas,
              efetivar pagamentos e oferecer uma experiência de compra
              personalizada e segura. Os dados fornecidos, como informações
              pessoais, endereço e forma de pagamento, são usados exclusivamente
              para fins de compra e nunca são vendidos ou comercializados. O
              compartilhamento ocorre apenas com parceiros essenciais, como
              transportadoras e operadoras de pagamento, ou quando exigido por
              lei. Todos os dados são armazenados em servidores seguros e
              protegidos por tecnologias de segurança. O cliente pode, a
              qualquer momento, solicitar acesso, correção ou exclusão de suas
              informações, bem como gerenciar o uso de cookies no navegador. A
              FlowBuy poderá atualizar esta Política sempre que necessário, e a
              versão mais recente estará disponível em nosso site. Para dúvidas
              ou solicitações, entre em contato pelo e-mail
              privacidade@flowbuy.com.br .
            </p>
            <img src="/src/assets/Logo-azul.png" alt="Logo" />
          </div>
        </div>
      </>
    );
}