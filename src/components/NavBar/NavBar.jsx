// imports
import "./NavBar.css"
import Tooltip from "../../elements/Tooltip/Tooltip"; 
import clsx from "clsx";
// states
import { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
//Icons
import { Search, CircleUserRound, ShoppingCart, Import } from "lucide-react";
import { searchProduct } from "../../Services/getProduct/searchGetProduct";



export default function NavBar(){

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navigate = useNavigate()
  const location = useLocation()

  const listProduct = useRef([])
  const getSearchProducts = async (search) => {
    if (!search) {
      setProducts([]);
      return;
    }

    setLoading(true);
    const start = Date.now();
    try{
      const dataSearchProduct = await searchProduct(search);
      setProducts(dataSearchProduct);
    }catch(error){
      console.error("Erro para buscar produtos:", error)
    
  }finally{
        const elapsed = Date.now() - start;
        const remaining = 500 - elapsed; 
        setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);;
  }
}

  useEffect(() =>{
    const delay = setTimeout(() =>{
      getSearchProducts(query);
    }, 500)
      return () => clearTimeout(delay)
}, [query])
  

  const handleChange = (e) =>{
    setQuery(e.target.value)
  }

  const scrollToItem = (index) => {
    const item = listProduct.current[index];
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

   const handleKeyDown = (e) => {
     if (e.key === "ArrowDown") {
       setSelectedIndex((prev) => {
         const nextIndex = (prev + 1) % products.length;
         scrollToItem(nextIndex);
         return nextIndex;
       });
     } else if (e.key === "ArrowUp") {
       setSelectedIndex((prev) => {
         const nextIndex = (prev - 1 + products.length) % products.length;
         scrollToItem(nextIndex);
         return nextIndex;
       });
     } else if (e.key === "Enter" && selectedIndex >= 0) {
       const product = products[selectedIndex];
       if (product) {
         window.location.href = `/Produto/${product.id}/${product.titulo}`;
       }
     }
   };

  //   Validação para background de acordo a rota
   const RouterBackgroundter = clsx("container-nav",{
    //  "container-nav": location.pathname === "/",
     "container-nav-Buyer": location.pathname.startsWith("/Buyer"),
   });

  
    return (
      <nav className={RouterBackgroundter}>
        <div id="logo-nav">
          <Link to="/">
            <img src="/src/assets/Logo.png" />
          </Link>
        </div>
        <div id="login-home">
          <Tooltip text="Login">
            <Link to="/Login">
              <CircleUserRound color="#fff" className="icon-login" />
            </Link>
          </Tooltip>
        </div>
        <div id="search-home">
          <input
            type="text"
            placeholder="Busque aqui..."
            id="search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={query}
            autoComplete="off"
          />
          <Search className="icon-home" />

          {loading && <p id="box-loading">Carregando...</p>}

          {products.length > 0 && (
            <ul id="box-search">
              {products.map((product, index) => (
                <li
                  key={product.id}
                  className={index === selectedIndex ? "selected" : ""}
                  ref={(prod) => (listProduct.current[index] = prod)}
                  onClick={() => {
                    navigate(`/Produto/${product.id}/${product.titulo}`);
                    setQuery("");
                    setProducts([]);
                  }}
                >
                  <Search className="icon-product" />
                  {product.titulo}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div id="resgistrar">
          <div className="Register">
            <Link to="/Buyer/Login">Cadastrar</Link>
          </div>
          <div className="Register-seller">
            <Link to="/Seller/Login">Cadastrar como Vendedor</Link>
          </div>
        </div>
        <div id="car-buy">
          <Tooltip text="Carrinho">
            <Link>
              <ShoppingCart color="#fff" className="icon-cart" />
            </Link>
          </Tooltip>
        </div>
      </nav>
    );
}