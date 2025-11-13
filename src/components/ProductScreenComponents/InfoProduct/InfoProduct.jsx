// Chamada
// import { getSingleProduct } from "../../../Services/getProduct/singleGetProduct";
import "./style.css";
import AvaliationProduct from "../Avation/AvaliationProduct";
import ServicesTheProduct from "../../ServicesTheProduct";
import ButtonCard from "../../Buttons/ButtonCard";
import Variation from "../../Variation";

// state
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Icons
import { Star } from "lucide-react";
import { GetSingleProductUnic } from "../../../Services/Services_Ecommerce/Get/singleProduct";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../Alert/alert";

export default function InfoProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [detalies, setDetalies] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPreco, setselectedPreco] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  // Puxando o produto pelo Id
  useEffect(() => {
    const singleProduct = async () => {
      setLoading(true);
      try {
        const dataSIngleProduct = await GetSingleProductUnic(id);
        setProduct(dataSIngleProduct);
        if (!dataSIngleProduct) {
          setSnackMessage("Não foi possivel mostrar o produto");
          setSnackSeverity("error");
        } else {
          setSnackMessage("Produto carregado com sucesso!");
          setSnackSeverity("success");
        }
        setOpenSnack(true);
      } catch (err) {
        console.log(err, "Erro ao buscar produto um único produto");
      }
      setLoading(false);
    };
    singleProduct();
  }, [id]);

  // Calcula o preço atual considerando variação ou preço principal
  const currentPrice = parseFloat(
    String(selectedPreco || product.preco || 0).replace(",", ".")
  );

  // Formata o preço com "R$"
  const formattedPrice = currentPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Calcula valor mensal (dividido por 12)
  const monthValue = currentPrice / 12;
  const monthValueFormatted = monthValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleSelectVariation = (variacao) => {
    if (variacao.imagemBase64) {
      setSelectedImage(variacao.imagemBase64);
    }
    if (variacao.preco) {
      setselectedPreco(variacao.preco);
    }
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <div id="container">
      <div id="detalhe-container">
        <div id="detalhe-image">
          {product.imagemPrincipalBase64 && (
            <img
              src={selectedImage || product.imagemPrincipalBase64}
              alt={product.nome}
            />
          )}
        </div>
        <div className="detalhe-product">
          <div>
            <h1>{product.nome}</h1>
            <p
              style={{
                fontSize: "1rem",
                color: "#6d6d6dff",
                marginBottom: "20px",
              }}
            >
              Quantidade:{product.estoqueTotal}
            </p>
            {/* <div>
              <AvaliationProduct produtoId={id}/>
              </div> */}
            <Star color="yellow" />
            <Star color="yellow" />
            <Star color="yellow" />
            <Star color="yellow" />
            <Star color="yellow" />
            <p>{formattedPrice}</p>
            <p
              style={{
                color: "#444",
                fontSize: "1rem",
                borderBottom: "2px solid #ccc",
              }}
            >
              ou {monthValueFormatted}/mes em 12x
            </p>
          </div>
          <div className="ProductVariation">
            {product.variacoes && (
              <Variation
                variacoes={product.variacoes}
                onSelect={handleSelectVariation}
              />
            )}
          </div>
          <div className="button-cart">
            <ButtonCard productId={product.id} />
          </div>
          <div className="Services">
            <ServicesTheProduct />
          </div>
        </div>
      </div>
      <div id="detalhe-product-allDescripition">
        <div className="type-descripition">
          <button
            className={detalies === "overview" ? "active" : ""}
            onClick={() =>
              setDetalies(detalies === "overview" ? null : "overview")
            }
          >
            Overview
          </button>
          <button
            className={detalies === "review" ? "active" : ""}
            onClick={() => setDetalies(detalies === "review" ? null : "review")}
          >
            Review
          </button>
          <button
            className={detalies === "suport" ? "active" : ""}
            onClick={() => setDetalies(detalies === "suport" ? null : "suport")}
          >
            Suport
          </button>
        </div>
      </div>
      {detalies ? (
        <div className="tab-content">
          {detalies === "overview" && (
            <div>
              <h2>Sobre o Produto</h2>
              <p>{product.descricao}</p>
            </div>
          )}
          {detalies === "review" && (
            <div>
              <h2>Reviews</h2>
              <AvaliationProduct produtoId={id} />
            </div>
          )}
          {detalies === "suport" && (
            <div>
              <h2>Suportet</h2>
              <p>Here you will find warranty and support info.</p>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
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
