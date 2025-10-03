// import
import "./ExchangeReturnPolicy.css";

// state
import { useEffect } from "react";

export default function ExchangeReturnPolicy() {

    
    const RouterColorLogo = location.pathname.startsWith("/Buyer") ? "/src/assets/Logo-verde.png" : "/src/assets/Logo-azul.png";

  useEffect(() => {
    document.documentElement.classList.add("container-Exchange");
    return () => document.documentElement.classList.remove("container-Exchange");
  });
  return (
    <>
      <div className="container-Exchange">
        <div id="conatiner-ExchangeReturnPolicy">
          <h1>Política de Privacidade</h1>
          <p>
            A FlowBuy preza pela satisfação de seus clientes e segue as normas
            do Código de Defesa do Consumidor. Caso o produto recebido não
            esteja de acordo com o pedido, apresente defeito de fabricação ou o
            cliente simplesmente desista da compra, é possível solicitar a troca
            ou devolução. O prazo para devolução por arrependimento é de até
            sete dias corridos após o recebimento, sendo necessário que o
            produto esteja em perfeitas condições, sem sinais de uso e em sua
            embalagem original. Em casos de defeito, o cliente deve entrar em
            contato com a FlowBuy, que fará a análise do item e providenciará a
            substituição ou estorno, conforme a situação. Produtos enviados sem
            aviso prévio poderão ser recusados. As despesas de frete em casos de
            defeito ou erro no envio serão de responsabilidade da FlowBuy,
            enquanto devoluções por arrependimento poderão ter custos de envio
            arcados pelo cliente.
          </p>
          <img src="/src/assets/Logo-azul.png" alt="Logo" />
        </div>
      </div>
    </>
  );
}