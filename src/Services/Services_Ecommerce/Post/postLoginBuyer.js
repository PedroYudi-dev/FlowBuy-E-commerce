import api from "../Api_Ecommerce"

export const createBuyer = async (bodyBuyer) =>{
    try{
        const response = await api.post(`/api/Cliente`, bodyBuyer);
        if(response.status === 200 || response.status === 201 ){
            console.log("foi criado um cliente")
            return response.data
        }else{
            (console.log("Houve um erro para criar um Cliente"), response.status)
            return response.data
        }
    }catch(error){
        console.error(
            "Erro ao criar um Cliente:",
            error.response?.data || error.message
        )
        return null
    }
}