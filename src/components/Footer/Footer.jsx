// imports
import "./Footer.css"
import { Link } from "react-router-dom"

// Icones
import { Phone, LockKeyhole, Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faPix,
  faPaypal,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// state


export default function Footer(){

  const locationMarket = "https://www.google.com/maps/place/R.+Amazonas,+734+-+Banzato,+Mar%C3%ADlia+-+SP,+17515-160/data=!4m2!3m1!1s0x94bfd733850c2799:0x4e5c0c6228a2422d?sa=X&ved=1t:242&ictx=111&cshid=1756303824088467"
  
    return (
      <>
        <div id="container-footer">
          <div id="start-footer">
            <img src="/src/assets/Logo.png" alt="" />
          </div>
          <div id="footer">
            <div className="on">
              <h2>Sobre o Site</h2>
              <Link to="/PrivacyPolicy">
                <p>Politica de Privacidade</p>
              </Link>
              <Link to="/TermsUse">
                <p>Termo de Uso</p>
              </Link>
              <Link to="/ExchangeReturnPolicy">
                <p>Politica de Troca/Devolução</p>
              </Link>
            </div>
            <div className="help">
              <h2>Ajuda e Suporte</h2>
              <Link>
                <p>Suporte</p>
              </Link>
            </div>
            <div id="contact">
              <div className="contact-inform">
                <h2>Contato</h2>
                <div className="phone">
                  <Phone color="#0b14c8" />
                  <p>(14) 3458-7478 - Atendimento das 8h até 18h </p>
                </div>
                <div className="email">
                  <Mail color="#0b14c8" />
                  <p>Flow@FlowBuy.com</p>
                </div>
                <div className="location">
                  <MapPin color="#0b14c8" />
                  <Link to={locationMarket} target="_blank">
                    <p>Rua Amazonas 734 Marília/SP</p>
                  </Link>
                </div>
              </div>
            </div>
            <div id="social">
              <div className="social-network">
                <h2>Rede Socias</h2>
                <div className="network">
                  <p>
                    <FontAwesomeIcon
                      className="network-icons"
                      icon={faFacebook}
                    />
                    @FlowBuyStore
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="network-icons"
                      icon={faInstagram}
                    />
                    @FlowBuyStore
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="network-icons"
                      icon={faTiktok}
                    />
                    @FlowBuyStore
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="network-icons"
                      icon={faTwitter}
                    />
                    @FlowBuyStore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="orter-onformation">
            <div className="security">
              <p>
                <LockKeyhole className="lock" color="#0b14c8" />
                Site Seguro
              </p>
              <p>Seus Dados estão Protegidos conforme a LGPD</p>
            </div>
            <div className="cards">
              <FontAwesomeIcon className="cards-pay" icon={faCcVisa} />
              <FontAwesomeIcon className="cards-pay" icon={faCcMastercard} />
              <FontAwesomeIcon className="cards-pay" icon={faPix} />
              <FontAwesomeIcon className="cards-pay" icon={faPaypal} />
            </div>
          </div>
        </div>
      </>
    );
}