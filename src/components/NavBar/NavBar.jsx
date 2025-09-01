// imports
import { Link } from "react-router-dom"
import "./NavBar.css"
import Tooltip from "../../elements/Tooltip/Tooltip"; 

// states
import { useEffect, useState, useRef } from "react";

//Icons
import { Search, CircleUserRound, ShoppingCart, Import } from "lucide-react";
import api from "../../Services/Api";



export default function NavBar(){

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const listProduct = useRef([])
  const getProducts = async (search) => {
    if (!search) {
      setProducts([]);
      return;
    }

    setLoading(true);
    try{
      const response = await api.get(`/api/Produto/search?q=${search}`);
      const data = response.data
      setProducts(data)
      console.log(data)
    }catch(error){
      console.error("Erro para buscar produtos:", error)
    
  }finally{
      setLoading(false);
  }
}

  useEffect(() =>{
    const delay = setTimeout(() =>{
      getProducts(query)
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

    return (
      <nav id="container-nav">
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
          />
          <Search className="icon-home" />

          {loading && <p>Carregando...</p>}

          {products.length > 0 && (
            <ul id="box-search">
              {products.map((product, index) => (
                <li
                  key={product.id}
                  className={index === selectedIndex ? "selected" : ""}
                  ref={(prod) => listProduct.current[index] = prod}
                >
                  <Link to={`api/Produto/${product.id}/${product.titulo}`}>
                    <Search className="icon-product" />
                    {product.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div id="resgistrar">
          <Link to="/Buyer/Login">Cadastrar</Link>
          <Link to="/Seller/Login">Cadastrar como Vendedor</Link>
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