// import
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

// Icons
import { Box, Boxes, ChartColumn, Store } from "lucide-react";
import { useEffect, useState } from "react";
import ButtonLogout from "../../../../components/Buttons/ButtonLogout";

export default function NavBarSeller() {

  const [sellerEmail, setSellerEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() =>{
    const storeSeller = sessionStorage.getItem("Seller");
    if(storeSeller){
      const sellerData = JSON.parse(storeSeller);
      setSellerEmail(sellerData.email);
      setIsLogin(true);
    }
  }, [])

  const handleLogout = () =>{
    sessionStorage.clear();
    setIsLogin(false)
    setIsLogin("")
    navigate("/Login")
  }
  return (
    <nav className="container-nav-seller">
      <div id="logo-nav-seller">
        <Link to="/Seller">
          <img src="/src/assets/LogoSeller_1.1.png" />
        </Link>
      </div>
      <div id="Seller-attributes">
        <div className="attributes">
          <Link>
            <Box color="#fff" className="icon-Products" />
            <p>Produto</p>
          </Link>
        </div>
        <div className="attributes">
          <Link>
            <ChartColumn color="#fff" className="icon-Products" />
            <p>Vendas</p>
          </Link>
        </div>
        <div className="attributes">
          <Link to="registerProduct">
            <Boxes color="#fff" className="icon-Products" />
            <p>Cadastrar Produto</p>
          </Link>
        </div>
      </div>
      
      <div id="PanelSeller">
        <div className="PanelAttributes">
          <Store color="#fff" />
        </div>
        <div>
          {sellerEmail ? (
            <>
              <h4>Vendedor: {sellerEmail}</h4>
              <p>Gerencie seus Produtos</p>
            </>
          ) : (
            <>
              <h4>Painel do Vendedor</h4>
              <p>
                Faça o seu Login{" "}
                <Link to="/Login">
                  <p style={{fontWeight: "bold"}}>Clique Aqui</p>
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
      <div>
        {isLogin ? (
          <>
            <ButtonLogout onClick={handleLogout} text="Desconectar" />
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
