import api from "../Api";

export const getProduct = async () =>{
  const response = await api.get("/api/Produto")
  return response.data
} 