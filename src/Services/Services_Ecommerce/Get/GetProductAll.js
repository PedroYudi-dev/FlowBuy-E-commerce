import api from "../Api_Ecommerce"


export const ProductAll =  async () =>{
    try{
        const response =  await api.get("/api/Produto")
        return response.data;
    }catch(error){
        const mensageError = "Erro ao buscar todos os produtos: " + error.message;
        console.error(mensageError);
        throw new Error (mensageError);
    }
}