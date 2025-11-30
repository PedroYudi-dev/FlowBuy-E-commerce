import api from "../Api_Ecommerce"

export const DeleteProductCart = async (itemId) =>{
    try{
        const response =  await api.delete(`/api/Carrinho/${itemId}`)
        return response.data === true;
    }catch(err){
        console.log("Erro ao deletar o produto no carrinho", err)
    }
}