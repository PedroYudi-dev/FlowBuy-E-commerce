// import
import { Link } from "react-router-dom";
import "./style.css";

// Icons
import { Box, Boxes, ChartColumn, Store } from "lucide-react";

export default function NavBarSeller() {
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
          <h3>Painel do Vendedor</h3>
          <p>Gerencie seus Produtos</p>
        </div>
      </div>
    </nav>
  );
}
