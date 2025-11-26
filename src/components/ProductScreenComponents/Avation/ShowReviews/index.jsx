import { useEffect, useState } from "react";
import { GetReviews } from "../../../../Services/Services_Ecommerce/Get/GetReviewsProducts";
import "./style.css";
import { Star, Trash2 } from "lucide-react";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { DeleteReviews } from "../../../../Services/Services_Ecommerce/Delete/DeleteReviewsProduct";
import { Alert } from "../../../Alert/alert";

export default function ShowReviewsProduct({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");

  const viewReview = async () => {
    setLoading(true);
    try {
      const dataReview = await GetReviews(productId);
      setReviews(dataReview);
    } catch (err) {
      console.error("Erro ao buscar reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    viewReview();
  }, [productId]);

  const handleDeleteReview = async (reviewId, clienteId) => {
    setDeleteLoading(true);
    try {
      await DeleteReviews(reviewId, clienteId);
      await viewReview();
      setSnackMessage("Sua avaliação foi excluída!");
      setSnackSeverity("success");
      setOpenSnack(true);
    } catch (err) {
      console.log("Error ao deletar", err);
      setSnackMessage("Erro ao excluir a sua avaliação");
      setSnackSeverity("error");
      setOpenSnack(true);
    } finally {
      setDeleteLoading(false);
    }
  };

   const handleCloseSnack = (event, reason) => {
     if (reason === "clickaway") return;
     setOpenSnack(false);
   };

  return (
    <div className="containerShowReviews">
      {reviews.map((rev) => (
        <div className="bixReview" key={rev.id}>
          {/* Nome do usuário */}
          <h3>{rev.cliente?.nome || "Cliente"}</h3>
          <div className="containerStruturReview">
            <div className="strutureReviewProduct" style={{ margin: "5px 0" }}>
              {Array.from({ length: rev.nota }).map((_, i) => (
                <Star key={i} size={25} color="#f5c518" />
              ))}
            </div>

            <div className="commetReview">
              <p>{rev.comentario}</p>
            </div>
            <div className="c">
              <p style={{ color: "#555", margin: "5px 0" }}>
                {new Date(rev.dataCriacao).toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
          <div
            className="deleteReview"
            onClick={() => handleDeleteReview(rev.id, rev.clienteId)}
          >
            <Trash2 color="red" />
          </div>
        </div>
      ))}

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
          Carregando Avaliações...
        </p>
      </Backdrop>
      <Backdrop
        open={deleteLoading}
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
          Deletando Avaliação...
        </p>
      </Backdrop>
    </div>
  );
}
