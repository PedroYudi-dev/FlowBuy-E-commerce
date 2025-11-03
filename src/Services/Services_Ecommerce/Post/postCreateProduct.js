import api from "../Api_Ecommerce"


export const CreateProduct = async (body) =>{
    try{
        const response = await api.post(`/api/Produto/Create-Product`, body);
        if(response.status === 200 || response.status === 201 ){
            return response.data
        }
    }catch(error){
        console.error(
          "Erro ao criar o produto:",
          error.response?.data || error.message
        );
    }
}