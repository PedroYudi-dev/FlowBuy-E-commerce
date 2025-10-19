import axios  from "axios";

const api = axios.create({
  baseURL: "https://localhost:7152"
})

export default api