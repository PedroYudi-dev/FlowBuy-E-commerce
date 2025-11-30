import api from "../Api_Ecommerce"

export const GetProductInCart = async (ClienteId) => {
    try{
        const response = await api.get(`api/Carrinho/${ClienteId}`)
        return response.data
    }catch(err){
        console.log(err, "Erro ao buscar produtos no carrinho")
    }
}