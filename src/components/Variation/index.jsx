// css
import { useState } from "react";
import "./style.css"


export default function Variation({ variacoes = [], onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    if(onSelect)
      onSelect(variacoes[index])
  };
  return (
    <div>
      <label>Color: </label>
      <div className="Variation-structure">
        {variacoes.map((v, index) => (
          <button
            key={v.id || index}
            onClick={() => handleSelect(index)}
            style={{
              backgroundColor: v.corCodigo,
              border: selected === index ? "3px solid #444" : "1px solid #ccc",
            }}
            title={v.corNome}
            className={selected === index ? "selected" : ""}
          />
        ))}
      </div>
    </div>
  );
}