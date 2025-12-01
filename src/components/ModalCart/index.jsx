import "./style.css";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalCart() {
    const [openModal, setOpenModal] = useState(false);
    const Navigate = useNavigate();
     const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const handleBackHome = (e) => {
    e.preventDefault();
    Navigate("/Buyer")
  };

  return (
    <>
      <div className="buttonFisherCart">
        <div>
          <button onClick={handleBackHome} className="cancelButton">
            Voltar
          </button>
        </div>
        <div>
          <button className="finisherButton" onClick={handleOpenModal}>
            Finalizar compra
          </button>
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <div className="modalContainerFinisher">
              <div className="modalFinisher">
                <h2>
                  Checkout em desenvolvimento. Esta funcionalidade estará
                  disponível em breve.
                </h2>
                <div className="buttonFinisher">
                  <button onClick={handleCloseModal} className="buttonSair">
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}
