import api from "../Api_Ecommerce"


export const createSeller = async (body) => {
    try {
      const response = await api.post(`/api/Fornecedor`, body);
      if (response.status === 200 || response.status === 201) {
        console.log("foi criado um vendedor");
        return response.data;
      } else {
        (console.log("Houve um erro para criar o vendedor:"), response.status);
        return null;
      }
    } catch (error) {
      console.error(
        "Erro ao criar vendedor:",
        error.response?.data || error.message
      );
      return null; 
    }
    
}