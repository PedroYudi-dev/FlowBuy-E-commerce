// Import
import "./Category.css"
import clsx from "clsx"

// state
import { useLocation } from "react-router-dom";


export default function Category(){

  const location = useLocation();
  const RouterColorCategory = clsx("Container-Category",{
    "Container-Category-Buyer": location.pathname.startsWith("/Buyer"),
  })

  const RouterColorCategoryCards = clsx( "Category",{
    "Category-Buyer": location.pathname.startsWith("/Buyer"),
  })
    return (
      <div  className={RouterColorCategory}>
        <h1>Category</h1>
        <div id="structure-category">
          <div className={RouterColorCategoryCards}>
            <img src="/Images_Category/Eltronicos.jpg" alt="Eletronicos" />
            <label htmlFor="">Eletronicos</label>
          </div>
          <div className={RouterColorCategoryCards}>
            <img src="/Images_Category/Cozinha.jpeg" alt="Cozinha" />
            <label htmlFor="">Cozinha</label>
          </div>
          <div className={RouterColorCategoryCards}>
            <img src="/Images_Category/Roupas.jpeg" alt="Roupas" />
            <label htmlFor="">Moda</label>
          </div>
          <div className={RouterColorCategoryCards}>
            <img src="/Images_Category/pet.jpeg" alt="Pet" />
            <label htmlFor="">Pet</label>
          </div>
        </div>
      </div>
    );
}