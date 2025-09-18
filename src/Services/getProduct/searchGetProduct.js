import api from "../Api";

export const searchProduct = async (search) => {
  const response = await api.get(`/api/Produto/search?q=${search}`);
  return response.data
};