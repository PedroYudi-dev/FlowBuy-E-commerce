import api from "../Api_Ecommerce"


export const getUserSeller = async (id) =>{
    try{
        const response =  await api.get(`Fornecedor/${id}`);
        return response.data;
    }catch(error){
        console.error("Erro ao obter o vendedor:", error);
    }
}