import api from "../Api_Ecommerce"


export const ProductBrands = async (marca) =>{
    try{
        const response = await api.get(`/api/Produto/marca/${marca}`)
        return response.data
    }catch(error){
        const mensageError =
          "Erro ao buscar todos os produtos: " + error.message;
        console.error(mensageError);
        throw new Error(mensageError);
    }
}