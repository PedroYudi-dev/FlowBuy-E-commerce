import api from "../Api_Ecommerce"


export const EditProduct = async (id, body) => {
    try{
        const response = await api.patch(`/api/Produto/${id}`, body);
        return response.data;
    }catch(err){
        console.error("Erro ao editar o produto:", err);
    }
}