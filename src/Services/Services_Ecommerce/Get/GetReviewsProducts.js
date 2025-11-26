import api from "../Api_Ecommerce"


export const GetReviews = async (produtoId) => {
  try {
    const response = await api.get(`api/Review/produto/${produtoId}`);
    return response.data
  } catch (err){
    console.log("Erro para mostrar as avaliações", err)
    throw err
  }
};