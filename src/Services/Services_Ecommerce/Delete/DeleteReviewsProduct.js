import api from "../Api_Ecommerce"

export const DeleteReviews = async (reviewId, clienteId) => {
  try {
    const response = await api.delete(
      `api/Review/${reviewId}?clienteId=${clienteId}`
    );
    return response.data;
  } catch (err) {
    console.log("não foi possivel deletar a avaliação", err);
    throw err;
  }
};