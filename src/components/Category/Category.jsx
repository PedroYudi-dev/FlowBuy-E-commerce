// Import
import "./Category.css"


export default function Category(){
    return (
      <div id="Container-Category">
        <h1>Category</h1>
        <div id="structure-category">
          <div className="Category">
            <img src="/Images_Category/Eltronicos.jpg" alt="Eletronicos" />
            <label htmlFor="">Eletronicos</label>
          </div>
          <div className="Category">
            <img src="/Images_Category/Cozinha.jpeg" alt="Cozinha" />
            <label htmlFor="">Cozinha</label>
          </div>
          <div className="Category">
            <img src="/Images_Category/Roupas.jpeg" alt="Roupas" />
            <label htmlFor="">Moda</label>
          </div>
          <div className="Category">
            <img src="/Images_Category/pet.jpeg" alt="Pet" />
            <label htmlFor="">Pet</label>
          </div>
        </div>
      </div>
    );
}