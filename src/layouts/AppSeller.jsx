import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBarSeller from "../Templates/Seller/ComponentsSeller/NavBarSeller";

export default function AppSeller() {
    return(
        <div>
            <NavBarSeller/>
            <Outlet/>
            <Footer/>
        </div>
    )
}