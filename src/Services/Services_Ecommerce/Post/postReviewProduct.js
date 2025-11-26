import api from "../Api_Ecommerce"

export const CreateReviews = async (body, produtoId) => {
  try {
    const response = await api.post(`api/Review/${produtoId}`,body );
    return response.data
  } catch(err){
    console.log("Erro ao criar a avaliação", err)
    throw err
  }
};