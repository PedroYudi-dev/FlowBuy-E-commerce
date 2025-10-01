// import
import "./TermUse.css";
import clsx from "clsx";
// state
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TermsUse() {

  const location = useLocation();
  const RouterTermsUse = clsx("conatiner-TermUse", {
    "conatiner-TermUse-Buyer": location.pathname.startsWith("/Buyer")
  });
  const RouterColorLogo = location.pathname.startsWith("/Buyer")
      ? "/src/assets/Logo-verde.png"
      : "/src/assets/Logo-azul.png";



  useEffect(() => {
    document.documentElement.classList.add("container-Terms");
    return () => document.documentElement.classList.remove("container-Terms");
  });
  return (
    <>
      <div className="container-Terms">
        <div className={RouterTermsUse}>
          <h1>Termos de Uso</h1>
          <p>
            Ao acessar e utilizar o site da FlowBuy, o usuário declara estar de
            acordo com as condições aqui descritas. Para realizar compras é
            necessário cadastrar-se com informações verdadeiras e manter a
            confidencialidade de seus dados de acesso. O uso de informações
            falsas ou de terceiros sem autorização não é permitido. Os preços,
            produtos e condições de pagamento exibidos na plataforma podem ser
            alterados a qualquer momento sem aviso prévio, e a confirmação da
            compra depende da aprovação do meio de pagamento escolhido. Caso
            ocorra indisponibilidade de estoque ou divergência no pedido, a
            FlowBuy entrará em contato para apresentar alternativas ou realizar
            o estorno do valor pago. O prazo de entrega informado no momento da
            compra pode variar conforme a região e a modalidade escolhida, não
            sendo a FlowBuy responsável por atrasos ocasionados por fatores
            externos, como greves ou falhas logísticas de transportadoras. O
            consumidor tem até sete dias corridos após o recebimento para
            solicitar devolução, conforme previsto no Código de Defesa do
            Consumidor, e produtos com defeito poderão ser trocados dentro do
            prazo legal mediante análise. Todo o conteúdo da plataforma,
            incluindo marca, logotipos, imagens, textos e layout, pertence à
            FlowBuy e é protegido por direitos autorais. O uso indevido sem
            autorização é proibido. A empresa poderá atualizar estes Termos de
            Uso a qualquer momento, cabendo ao usuário consultá-los
            regularmente. Em caso de dúvidas ou disputas, fica eleito o foro da
            comarca do domicílio do consumidor para a resolução de conflitos.
          </p>
          <img src={RouterColorLogo} alt="Logo" />
        </div>
      </div>
    </>
  );
}