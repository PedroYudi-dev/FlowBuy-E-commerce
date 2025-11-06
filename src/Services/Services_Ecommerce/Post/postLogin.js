import api from "../Api_Ecommerce"


export const validationLogin = async (body) =>{
    try{
        const response = await api.post(`api/Auth/Login`, body)
        const data = response.data
        sessionStorage.setItem("Seller", JSON.stringify(data));
        sessionStorage.setItem("Buyer", JSON.stringify(data));

        if(data.FornecedorId){
            sessionStorage.setItem("fornecedorId", data.FornecedorId);
        }

        if(data.clienteId){
            sessionStorage.setItem("clienteId", data.clienteId);
        }
        console.log("Login realizado com sucesso:", data);
        return data;
    }catch(error){
        const mensage = error.response?.data?.message || "Erro desconhecido";
            console.error("Erro ao fazer o Login:", mensage);
    }
}