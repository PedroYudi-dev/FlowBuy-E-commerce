import React, { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import "./style.css";


import DropzoneBox from "../../DropZone";

const colors = [
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
  { name: "Vermelho", hex: "#FF0000" },
  { name: "Rosa", hex: "#FFC0CB" },
  { name: "Roxo", hex: "#800080" },
  { name: "Azul", hex: "#0000FF" },
  { name: "Verde", hex: "#008000" },
  { name: "Amarelo", hex: "#FFFF00" },
  { name: "Laranja", hex: "#FFA500" },
  { name: "Marrom", hex: "#8B4513" },
  { name: "Dourado", hex: "#DAA520" },
  { name: "Prata", hex: "#C0C0C0" },
  { name: "Cinza", hex: "#808080" },
];

export default function ImageUploader({ onImageChange, reset }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (reset) {
      setImages([]);
    }
  }, [reset]);
  const readFileBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleAddImage = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Você pode enviar somente imagens");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Você pode enviar somente imagens abaixo de 5MB");
      return;
    }

    try {
      const base64 = await readFileBase64(file);
      const newImage = { file, url: base64, colorName: "", colorHex: "" };
      setImages((prev) => [...prev, newImage].slice(0, 3));
    } catch (error) {
      alert("Erro ao processar a imagem", error);
    }
  }, []);

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSelectColor = (index, hex) => {
    const selectedColor = colors.find((c) => c.hex === hex);
    const colorName = selectedColor ? selectedColor.name : "";
    setImages((prev) =>
      prev.map((img, i) =>
        i === index ? { ...img, colorHex: hex, colorName } : img
      )
    );
  };

  const handleStockChange = (index, value) => {

  const numericValue = Number(value);
  let error = "";

  if (numericValue < 0) {
    error = "O estoque não pode ser negativo.";
  } else if (!Number.isInteger(numericValue)) {
    error = "O valor deve ser um número inteiro.";
  } else if (numericValue > 10000) {
    error = "O estoque máximo é 10.000 unidades.";
  }

  setImages((prev) =>
    prev.map((img, i) =>
      i === index ? { ...img, stockQuantity: numericValue, stockError: error } : img
    )
  );
};


const handlePriceChange = (index, value) => {
  // remove caracteres não numéricos
  const onlyNumbers = value.replace(/\D/g, "");
  const numericValue = Number(onlyNumbers) / 100;

  let error = "";
  if (numericValue < 0) {
    error = "O preço não pode ser negativo.";
  } else if (numericValue > 99999.99) {
    error = "Preço máximo é R$99.999,99.";
  }

  setImages((prev) =>
    prev.map((img, i) =>
      i === index ? { ...img, price: numericValue, priceError: error } : img
    )
  );
};

  useEffect(() => {
    onImageChange(images);
  }, [images, onImageChange]);

  return (
    <div className="uploader-wrapper">
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <div className="image-wrapper">
              <img
                src={image.url}
                alt={`Produto ${index + 1}`}
                className="image"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="remove-button"
              >
                <X className="icon" />
              </button>
            </div>

            <div>
              <div className="SelectColor">
                <label>Cor do Produto {index + 1}</label>

                <select
                  value={image.colorHex}
                  onChange={(e) => handleSelectColor(index, e.target.value)}
                >
                  <option value="">Selecione a cor</option>
                  {colors.map((color) => (
                    <option key={color.hex} value={color.hex}>
                      {color.name}
                    </option>
                  ))}
                </select>
                {image.colorHex && (
                  <div
                    className="color-preview"
                    style={{
                      backgroundColor: image.colorHex,
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      margin: "6px auto 0",
                      border: "1px solid #ccc",
                    }}
                  />
                )}
              </div>

              <div className="structureStockInImage">
                <label>Estoque dessa variação</label>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={image.stockQuantity || ""}
                  onChange={(e) => handleStockChange(index, e.target.value)}
                  placeholder="Ex: 20"
                />
                {image.stockError && (
                  <p style={{ color: "red" }}>{image.stockError}</p>
                )}
              </div>

              <div className="structurePriceInImage">
                <label>Preço dessa variação</label>
                <input
                  type="text"
                  value={
                    image.price
                      ? image.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : ""
                  }
                  onChange={(e) => handlePriceChange(index, e.target.value)}
                  placeholder="Ex: R$199,90"
                />
                {image.priceError && (
                  <p style={{ color: "red" }}>{image.priceError}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Caixa "Adicionar nova" aparece sempre enquanto não atingir o limite */}
        {images.length < 3 && <DropzoneBox onDrop={handleAddImage} />}
      </div>
      <p className="format-info">
        Formatos aceitos: JPG, PNG, WEBP (máx. 5MB cada)
      </p>
    </div>
  );
}

