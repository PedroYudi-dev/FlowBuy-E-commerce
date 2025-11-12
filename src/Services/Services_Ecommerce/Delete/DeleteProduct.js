import api from "../Api_Ecommerce"


export const Delete = async (id) =>{
    try{
        const response = await api.delete(`/api/Produto/${id}`)
        return response.data;
    }catch(error){
        const mensage = error.response?.data?.message || "Erro desconhecido";
        console.error("Erro ao deletar o produto:", mensage);
    }
}