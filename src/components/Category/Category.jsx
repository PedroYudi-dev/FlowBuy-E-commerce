// Import
// import { useState } from "react";
import "./Category.css"
import { useNavigate } from "react-router-dom";

// state

export default function Category(){

  const navigate = useNavigate()
  // const [productBrand, setProductBrand] = useState()
  const brands = [
    { name: "Apple", image: "/Images_Category/Apple.jpg" },
    { name: "Samsung", image: "/Images_Category/Samsung.jpg" },
    { name: "Xiaomi", image: "/Images_Category/Xiaomi.jpg" },
    { name: "Huawei", image: "/Images_Category/Huawei.jpg" },
  ];

    return (
      <div className="Container-Category">
        <div id="structure-category">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="Category"
              onClick={() => navigate(`/Brand/${brand.name}`)}
            >
              <img src={brand.image} alt={brand.name} />
              <label>{brand.name}</label>
            </div>
          ))}
        </div>
      </div>
    );
}