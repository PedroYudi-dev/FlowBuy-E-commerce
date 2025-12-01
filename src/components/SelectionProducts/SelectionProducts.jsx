// chamada
// import { getProduct } from "../../Services/getProduct/allGetProduct"
import "./SelectionProducts.css";

// icons
import { Star } from "lucide-react";

// UseState
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductAll } from "../../Services/Services_Ecommerce/Get/GetProductAll";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../Alert/alert";
import { GetReviews } from "../../Services/Services_Ecommerce/Get/GetReviewsProducts";

export default function SelectionProducts() {
  const [produto, setProduto] = useState([]);
  const navigate = useNavigate();
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState({});


  useEffect(() => {
    const viewProductGet = async () => {
      setLoading(true);
      try {
        const dataProduct = await ProductAll();
        setProduto(dataProduct);
        if (!dataProduct) {
          setSnackMessage("Não foi possivel mostrar os produtos");
          setSnackSeverity("error");
        } else {
          setSnackMessage("Produtos carregados com sucesso!");
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

 useEffect(() => {
   async function loadAllRatings() {
     const results = {};

     for (const p of produto) {
       const data = await GetReviews(p.id);

       if (Array.isArray(data) && data.length > 0) {
         const media =
           data.reduce((sum, r) => sum + Number(r.nota || 0), 0) / data.length;

         results[p.id] = {
           average: media,
           count: data.length,
         };
       } else {
         results[p.id] = { average: 0, count: 0 };
       }
     }

     setRatings(results);
   }

   if (produto.length > 0) {
     loadAllRatings();
   }
 }, [produto]);

  

  return (
    <div id="Container-SelectionProducts">
      <div id="structure-SelectionProducts">
        {produto.map((product) => (
          <div className="Products" key={product.id}>
            <img src={product.imagemPrincipalBase64} alt={product.nome} />
            <div className="info-product">
              <label htmlFor="">{product.nome}</label>
              <label style={{ fontSize: "1.2rem" }} htmlFor="">
                Marca: {product.marca}
              </label>
              <p style={{ fontSize: "1rem", color: "#6d6d6dff" }}>
                Quantidade:{product.estoqueTotal}
              </p>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    color={
                      i < Math.round(ratings[product.id]?.average || 0)
                        ? "#FFD700"
                        : "#ccc"
                    }
                  />
                ))}

                <span style={{ marginLeft: 8, fontSize:"1.2rem", color: "#555" }}>
                {(ratings[product.id]?.average || 0).toFixed(1)} 
              </span>
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
            <div className="button-buy">
              <button
                type="submit"
                className="buy-product"
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
        <p style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "Bold" }}>
          Carregando Produto...
        </p>
      </Backdrop>
    </div>
  );
}
