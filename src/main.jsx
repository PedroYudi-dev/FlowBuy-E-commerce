import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './layouts/App.jsx'
import AppSeller from './layouts/AppSeller.jsx'
// Rota
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// Paginas
import Home from './router/Home/Home.jsx'
import Login from './router/Login/Login.jsx'
import LoginSeller from './router/LoginSeller/LoginSeller.jsx'
import LoginBuyer from "./router/LoginBuyer/LoginBuyer.jsx"
import PrivacyPolicy from './components/FooterComponents/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsUse from './components/FooterComponents/TermsUse/TermsUse.jsx'
import ExchangeReturnPolicy from './components/FooterComponents/ExchangeReturnPolicy/ExchangeReturnPolicy.jsx'
import ProductScreen from './router/ProductScreen/index.jsx'
import HomeSeller from './Templates/Seller/HomeSeller/index.jsx'
import RegisterProduct from './Templates/Seller/RegisterProduct/index.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import ProductsSeller from './Templates/Seller/ProductsSeller/index.jsx'
import EditProductSingle from "./Templates/Seller/EditProduct/index.jsx";
import Brands from './components/Category/Brands/index.jsx'
import CartProduct from './router/Cart/index.jsx'

// Aqui colocamos a estrutura do "APP" nas rotas. APP = PAI FILHOS = ROTAS
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Seller/Login",
    element: <LoginSeller />,
  },
  {
    path: "/Buyer/Login",
    element: <LoginBuyer />,
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/TermsUse",
        element: <TermsUse />,
      },
      {
        path: "/ExchangeReturnPolicy",
        element: <ExchangeReturnPolicy />,
      },
      {
        path: "/Produto/:id/:titulo?",
        element: <ProductScreen />,
      },
      {
        path: "Brand/:marca",
        element: <Brands />,
      },
    ],
  },
  {
    path: "/Buyer",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "TermsUse",
        element: <TermsUse />,
      },
      {
        path: "ExchangeReturnPolicy",
        element: <ExchangeReturnPolicy />,
      },
      {
        path: "Produto/:id/:titulo?",
        element: <ProductScreen />,
      },
      {
        path: "Brand/:marca",
        element: <Brands />,
      },
      {
        path: "ShoppingCart",
        element: <CartProduct />,
      },
    ],
  },
  {
    path: "/Seller",
    element: <AppSeller />,
    children: [
      {
        index: true,
        element: <HomeSeller />,
      },
      {
        path: "registerProduct",
        element: <RegisterProduct />,
      },
      {
        path: "ProductsSeller",
        element: <ProductsSeller />,
      },
      {
        path: "ProductsSeller/EditProduct/:id",
        element: <EditProductSingle />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
