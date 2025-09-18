import api from "../Api";

export const getSingleProduct = async (id) =>{
    const response = await api.get(`/api/Produto/${id}`);
    return response.data
}