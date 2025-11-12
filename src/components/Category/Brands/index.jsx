// chamada
// import { getProduct } from "../../Services/getProduct/allGetProduct"
import "./style.css";
// icons
import { Star } from "lucide-react";

// UseState
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { ProductAll } from "../../Services/Services_Ecommerce/Get/GetProductAll";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";

import { ProductBrands } from "../../../Services/Services_Ecommerce/Get/GetProductBrands";
import { Alert } from "../../Alert/alert";

export default function Brands() {
  const [produto, setProduto] = useState([]);
  const navigate = useNavigate();
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const { marca } = useParams();

  useEffect(() => {
    const viewProductGet = async () => {
      setLoading(true);
      try {
        const dataProduct = await ProductBrands(marca);
        setProduto(dataProduct);
        if (!dataProduct) {
          setSnackMessage(`Nenhum produto encontrado para ${marca}`);
          setSnackSeverity("error");
        } else {
          setSnackMessage(`Produtos da marca ${marca} carregados com sucesso!`);
          setSnackSeverity("success");
        }
        setOpenSnack(true);
      } catch (error) {
        console.error(error, "Não foi possivel mostrar os produtos");
      }
      setLoading(false);
    };
    viewProductGet();
  }, []);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <div id="conatiner-product-screen">
      <div id="product-screen">
        <div id="Container-Brands">
          <div id="structure-Brands">
            {produto.map((product) => (
              <div className="Brands" key={product.id}>
                <img src={product.imagemPrincipalBase64} alt={product.nome} />
                <div className="info-Brands">
                  <label htmlFor="">{product.nome}</label>
                  <label style={{ fontSize: "1.2rem" }} htmlFor="">
                    Marca: {product.marca}
                  </label>
                  <p style={{ fontSize: "1rem", color: "#6d6d6dff" }}>
                    Quantidade:{product.estoqueTotal}
                  </p>
                  <div className="stars">
                    <Star color="#f7eb0cff" className="star" />
                    <Star color="#f7eb0cff" className="star" />
                    <Star color="#f7eb0cff" className="star" />
                    <Star color="#f7eb0cff" className="star" />
                    <Star color="#f7eb0cff" className="star" />
                  </div>
                  <p>
                    {product.preco &&
                      parseFloat(
                        String(product.preco).replace(",", ".")
                      ).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </p>
                </div>
                <div className="button-buy-Brands">
                  <button
                    type="submit"
                    className="buy-product-Brands"
                    onClick={() => {
                      navigate(`/Produto/${product.id}/${product.nome}`);
                    }}
                  >
                    Visualizar
                  </button>
                </div>
                <div className="button-car"></div>
              </div>
            ))}
          </div>
          <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
          >
            <Alert
              onClose={handleCloseSnack}
              severity={snackSeverity}
              sx={{ color: "#fff", width: "100%" }}
            >
              <p style={{ color: "#fff" }}>{snackMessage}</p>
            </Alert>
          </Snackbar>

          <Backdrop
            open={loading}
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <CircularProgress color="success" />
            <p
              style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "Bold" }}
            >
              Carregando Produto...
            </p>
          </Backdrop>
        </div>
      </div>
    </div>
  );
}
