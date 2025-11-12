import api from "../Api_Ecommerce"


export const searchGetProduct = async (search) => {
  try {
    const response = await api.get(`/api/Produto/search?nome=${search}`);
    return response.data
  } catch(error){
    const mensageError = "Erro ao buscar o  produtos: " + error.message;
    console.error(mensageError);
    throw new Error(mensageError);
  }
};