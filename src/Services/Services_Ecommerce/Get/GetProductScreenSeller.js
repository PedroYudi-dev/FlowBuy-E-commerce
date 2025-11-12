import api from "../Api_Ecommerce"


export const GetProductScreenSeller = async (fornecedorId) =>{
    try {
      const response = await api.get(`/api/Produto/fornecedor/${fornecedorId}`);

      return response.data;
    } catch (err) {
      console.error("Erro ao obter os produtos do vendedor:", err);
      throw err;
    }
} 