import { Backdrop, CircularProgress, Modal, Snackbar } from "@mui/material";
import { useState } from "react";
import "./style.css";
import { Star } from "lucide-react";
import { Alert } from "../../Alert/alert";
import { CreateReviews } from "../../../Services/Services_Ecommerce/Post/postReviewProduct";

export default function AvaliationProduct({ produtoId }) {
  const [openmodal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");

  const handleCreateReview = async () => {
    const clientStorage = JSON.parse(sessionStorage.getItem("Buyer"));
    const clientId = Number(clientStorage?.clienteId);

    const body = {
      Nota: rating,
      Comentario: comment,
      ClienteId: clientId
    };
    setOpenModal(false); 
    setLoading(true);
    try {
      const response = await CreateReviews(body, produtoId);
      console.log("Produto Criado", response);
      
      setSnackMessage("Avaliação foi criado com sucesso!!");
      setSnackSeverity("success");
      setComment("")
      setRating("")
      setOpenSnack(true);
      setOpenModal(false);

    } catch (err) {
      console.log("Erro ao criar avalição", err);
       setSnackMessage("Erro ao criar avaliação. Tente novamente.");
       setSnackSeverity("error");
       setOpenSnack(true);

    }
    setLoading(false);

  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  return (
    <div>
      <div>
        <button className="buttonCreateReview" onClick={() => setOpenModal(true)}>Criar Avaliação</button>
        <Modal open={openmodal} onClose={() => setOpenModal(false)}>
          <div className="modalContainer ">
            <div className="ModalReviews">
              <h2>Crie a sua Avaliação</h2>
              <div className="avaliationEstrelas">
                <label>Avaliação</label>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={32}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(null)}
                      color={(hover || rating) >= star ? "#0b14c8" : "#ccc"}
                      style={{ cursor: "pointer", transition: "0.2s" }}
                    />
                  ))}
                </div>
              </div>
              <div className="avaliationComentarios">
                <label>Comentário</label>
                <textarea
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="buttonAvaliation">
                <button className="buttonSair" onClick={handleCloseModal}>
                  Sair
                </button>
                <button className="buttonSalvar" onClick={handleCreateReview}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </Modal>
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
          Criando Avaliação...
        </p>
      </Backdrop>
    </div>
  );
}
