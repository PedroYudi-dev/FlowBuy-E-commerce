import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [seller, setSeller] = useState(null);

  // Carrega o vendedor salvo ao abrir a página
  useEffect(() => {
    const storedSeller = sessionStorage.getItem("Seller");
    if (storedSeller) {
      setSeller(JSON.parse(storedSeller));
    }
  }, []);

  // Quando logar, salva o vendedor no estado e no sessionStorage
  const login = (sellerData) => {
    setSeller(sellerData);
    sessionStorage.setItem("Seller", JSON.stringify(sellerData));
  };

  // Quando sair, limpa tudo
  const logout = () => {
    setSeller(null);
    sessionStorage.removeItem("Seller");
  };

  return (
    <AuthContext.Provider value={{ seller, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext
