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
    ],
  },
  {
    path: "/Seller",
    element: <AppSeller />,
    children: [
      {
        index: true,
        element: <HomeSeller/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
