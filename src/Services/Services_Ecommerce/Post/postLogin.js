import api from "../Api_Ecommerce"


export const validationLogin = async (data) =>{
    try{
        const response = await api.post(`api/Auth/Login`, data)
        if(response.status === 200 || response.status === 201){
            console.log("Deu certo o Login")
            return response.data
        }else{
            (console.log("Houve um problema com o login"), response.status)
            return response.data
        }
    }catch(error){
            console.error(
            "Erro ao fazer o login:",
            error.response?.data || error.message
            );
            return null;
    }
}