import "./Carrinho.css";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
const Carrinho = () => {
  const [carrinhoVisible, setCarrinhoVisible] = useState(false);

  return (
    <div className="carrinho-container">
      <MdOutlineShoppingCart
        size={30}
        onClick={() => setCarrinhoVisible(!carrinhoVisible)}
      />
      <div
        className={`${carrinhoVisible ? "carrinho-fundo" : ""}`}
        onClick={(e) => {
          if (e.target.className === "carrinho-fundo")
            setCarrinhoVisible(!carrinhoVisible);
        }}
      >
        <div
          className={`carrinho ${carrinhoVisible ? "carrinho-animacao" : ""}`}
        >
          carrinho
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
