import api from "../Api_Ecommerce"


export const UpdateProductCart = async (body) =>{
    try{
        const response =  await api.put(`/api/Carrinho/Update`, body)
        return response.data
    }catch(err){
        console.log("Erro ao atualizar o produto no carrinho", err)
    }
}