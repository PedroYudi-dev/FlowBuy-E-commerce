import { ShoppingCart, Trash2 } from "lucide-react";
import "./style.css";
import { useEffect, useState } from "react";
import { GetProductInCart } from "../../../../Services/Services_Ecommerce/Get/GetProductInCart";
import { UpdateProductCart } from "../../../../Services/Services_Ecommerce/Post/UpdateProductInCart";
import { DeleteProductCart } from "../../../../Services/Services_Ecommerce/Delete/DeleteProductInCart";
import { Backdrop, CircularProgress } from "@mui/material";

export default function SelectionProductsInCart() {
  const user = JSON.parse(sessionStorage.getItem("Buyer"));
  const clientId = Number(user?.clienteId);
  const [cart, setCart] = useState({ itens: [], total: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCart() {
      setLoading(true);
      try{
        const data = await GetProductInCart(clientId);
      setCart(data);
      }catch(err){
        console.error("Erro ao carregar o carrinho:", err);
      }
      setLoading(false);
    }
    loadCart();
  }, []);

  const handleChangeQuantity = async (itemId, novaQuantidade) => {
    try {
      const updatedCart = await UpdateProductCart({
        itemCarrinhoId: itemId,
        quantidade: novaQuantidade,
      });

      setCart((prev) => {
        const newItens = prev.itens.map((it) => {
          const updatedItem = updatedCart.itens.find((u) => u.id === it.id);
          return updatedItem ? updatedItem : it;
        });

        return { ...prev, itens: newItens, total: updatedCart.total };
      });
    } catch (err) {
      console.error("Erro ao atualizar quantidade:", err);
      alert("Não foi possível atualizar a quantidade. Estoque insuficiente?");
    }
  };

  const handleIncrease = (itemId, quantidadeAtual, quantidadeDisponivel) => {
    if (quantidadeAtual >= quantidadeDisponivel) {
      alert("Você atingiu o limite de estoque disponível!");
      return;
    }
    handleChangeQuantity(itemId, quantidadeAtual + 1);
  };

  const handleDecrease = (itemId, quantidadeAtual) => {
    if (quantidadeAtual <= 1) return;
    handleChangeQuantity(itemId, quantidadeAtual - 1);
  };

  const handleRemove = async (itemId) => {
    try {
      await DeleteProductCart(itemId);

      setCart((prev) => {
        const newItens = prev.itens.filter((it) => it.id !== itemId);
        const newTotal = newItens.reduce((acc, it) => acc + it.subtotal, 0);
        return { ...prev, itens: newItens, total: newTotal };
      });
    } catch (err) {
      console.error("Erro ao remover o produto:", err);
      alert("Erro ao remover o produto do carrinho.");
    }
  };

  return (
    <div className="cartContainer">
      <h2>
        <ShoppingCart color="#0b14c8" /> Carrinho de Compras
      </h2>

      {cart.itens.map((item) => (
        <div key={item.id} className="cartItem">
          <img
            src={item.imagemBase64}
            alt={item.nomeProduto}
            className="productImage"
          />

          <div className="itemInfo">
            <h3 className="itemName">{item.nomeProduto}</h3>
            <h3 className="itemName">
              Estoque:{item.variacao.estoque.quantidadeDisponivel}
            </h3>

            <div className="quantityBox">
              <button
                onClick={() => handleDecrease(item.id, item.quantidade)}
                disabled={item.quantidade <= 1}
              >
                -
              </button>
              <span>{item.quantidade}</span>
              <button
                onClick={() =>
                  handleIncrease(
                    item.id,
                    item.quantidade,
                    item.variacao.estoque.quantidadeDisponivel
                  )
                }
                disabled={
                  item.quantidade >= item.variacao.estoque.quantidadeDisponivel
                }
              >
                +
              </button>
            </div>

            <button className="removeBtn" onClick={() => handleRemove(item.id)}>
              <Trash2 size={15} color="red" />
            </button>
          </div>

          <div className="prices">
            <span className="currentPrice">R$ {item.subtotal.toFixed(2)}</span>
          </div>
        </div>
      ))}

      <div className="cartTotal">
        <h2>Total do Pedido: R$ {cart.total.toFixed(2)}</h2>
      </div>
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress color="success" />
        <p style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "Bold" }}>
          Carregando Carrinho...
        </p>
      </Backdrop>
    </div>
  );
}
