// imports
import "./Footer.css"
import { Link } from "react-router-dom"

// Icones
import { Phone, LockKeyhole, Mail, MapPin, FacebookIcon, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import IconMasterCard from "../../elements/Cards/IconMasterCard";
import VisaCard from "../../elements/Cards/IconVisaCard";
import PaypalCard from "../../elements/Cards/IconPayPall";
import PixLogo from "../../elements/Cards/IconPix";

// state


export default function Footer(){

  const locationMarket = "https://www.google.com/maps/place/R.+Amazonas,+734+-+Banzato,+Mar%C3%ADlia+-+SP,+17515-160/data=!4m2!3m1!1s0x94bfd733850c2799:0x4e5c0c6228a2422d?sa=X&ved=1t:242&ictx=111&cshid=1756303824088467"


  const IconVisa = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width="100" height="60">
  <text x="0" y="45" font-family="Arial, sans-serif" font-size="50" fill="white">VISA</text>
</svg>
  const IconMastercard = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width="100" height="60">
  <circle cx="35" cy="30" r="20" fill="white" opacity="0.8"/>
  <circle cx="65" cy="30" r="20" fill="white" opacity="0.8"/>
</svg>

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
                  <Phone color="#bebebe" />
                  <p>(14) 3458-7478 - Atendimento das 8h até 18h </p>
                </div>
                <div className="email">
                  <Mail color="#bebebe" />
                  <p>Flow@FlowBuy.com</p>
                </div>
                <div className="location">
                  <MapPin color="#bebebe" />
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
                    <FacebookIcon className="network-icons" color="#bebebe" />
                    @FlowBuyStore
                  </p>
                  <p>
                    <Instagram className="network-icons" color="#bebebe" />
                    @FlowBuyStore
                  </p>
                  <p>
                    <LinkedinIcon className="network-icons" color="#bebebe" />
                    @FlowBuyStore
                  </p>
                  <p>
                    <Twitter
                      className="network-icons"
                      color="#bebebe"
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
                <LockKeyhole className="lock" color="#bebebe" />
                Site Seguro
              </p>
              <p>Seus Dados estão Protegidos conforme a LGPD</p>
            </div>
            <div className="cards">
              <VisaCard />
              <IconMasterCard />
              <PixLogo />
              <PaypalCard />
            </div>
          </div>
        </div>
      </>
    );
}