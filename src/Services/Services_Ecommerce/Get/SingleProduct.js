import api from "../Api_Ecommerce"


export const GetSingleProductUnic = async (id) =>{
    try{
        const response = await api.get(`/api/Produto/${id}`)
        return response.data;
    }catch(error){
        const mensageError = "Erro ao buscar o produto: " + error.message;
        console.error(mensageError);
        throw new Error (mensageError);
    }
}