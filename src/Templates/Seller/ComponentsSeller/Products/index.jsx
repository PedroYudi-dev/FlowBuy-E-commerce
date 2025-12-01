import "./style.css";

// chamada
// import { getProduct } from "../../../../Services/getProduct/allGetProduct";
import { GetProductScreenSeller } from "../../../../Services/Services_Ecommerce/Get/GetProductScreenSeller";
import { Delete } from "../../../../Services/Services_Ecommerce/Delete/DeleteProduct";
// icons
import { SquarePen, Star, Trash2 } from "lucide-react";

// UseState
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "../../../../components/Alert/alert";

export default function SelectionProductsSeller() {
  const sellerData = JSON.parse(sessionStorage.getItem("Seller"));
  const fornecedorId = sellerData?.fornecedorId || sellerData?.FornecedorId;
  const [produto, setProduto] = useState([]);
  // const navigate = useNavigate()
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const viewProductGetSeller = async () => {
      setLoading(true);
      try {
        if (!fornecedorId) {
          console.log("FornecedorId não encontrado.");
          return;
        }

        const dataProduct = await GetProductScreenSeller(fornecedorId);
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
    viewProductGetSeller();
  }, [fornecedorId]);

  const handleDeleteProduct = async (produtoId) => {
    const deleteProduct = await Delete(produtoId);
    if (!deleteProduct) {
      setSnackMessage("Erro ao deletar o produto.");
      setSnackSeverity("error");
    } else {
      setSnackMessage("Produto deletado com sucesso!");
      setSnackSeverity("success");
      setProduto(produto.filter((prod) => prod.id !== produtoId));
    }
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <div id="Container-SelectionProductsSeller">
      {/* <h1>Produtos Cadastrados</h1> */}
      <div id="structure-SelectionProductsSeller">
        {produto.map((product) => (
          <div className="ProductsSeller" key={product.id}>
            <img src={product.imagemPrincipalBase64} alt={product.nome} />
            <div className="info-producSeller">
              <label htmlFor="">{product.nome}</label>
              <label style={{ fontSize: "1.2rem" }} htmlFor="">
                Marca: {product.marca}
              </label>
              <p style={{ fontSize: "1rem", color: "#6d6d6dff" }}>
                Quantidade:{product.estoqueTotal}
              </p>
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
            <div className="ButtonsProduct">
              <div className="button-buySeller">
                {/* <button
                  type="submit"
                  className="buy-productSeller"
                  onClick={() => {
                    navigate(`EditProduct/${product.id}`);
                  }}
                >
                  <SquarePen color="#0c0c0cff" />
                </button> */}
              </div>
              <div className="DeleteProduct">
                <button onClick={() => handleDeleteProduct(product.id)}>
                  <Trash2 color="#ff0000ff" />
                </button>
              </div>
            </div>
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
