import api from "../Api_Ecommerce"


export const AddProductToCart = async (body) =>{
    try{
        const response =  await api.post(`api/Carrinho/add`, body)
        return response.data    
    }catch(err){
        console.log(err, "Erro ao adicionar produto ao carrinho")
    }
}