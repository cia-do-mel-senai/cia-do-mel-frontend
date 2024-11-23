import { useState } from "react";
import "./ProdutoDetalhes.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProdutoDetalhes = () => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade((quantidadeAnterior) =>
      quantidadeAnterior < 999 ? quantidadeAnterior + 1 : 999
    );
  };

  const diminuirQuantidade = () => {
    setQuantidade((quantidadeAnterior) =>
      quantidadeAnterior > 1 ? quantidadeAnterior - 1 : 1
    );
  };

  return (
    <div className="produto-detalhes-container">
      <div className="produto-detalhes">
        <img
          src="https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
          alt=""
        />
        <p>Pote de mel</p>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: "normal",
            textAlign: "center",
            color: "white",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sed
          totam esse sunt qui iusto aut quibusdam accusantium dolorem quaerat
          veritatis deleniti, vitae temporibus odit? Neque natus harum culpa
          excepturi!
        </p>
        <p>R$29.99</p>
        <div className="adicionar-carrinho-produto">
          <button
            className="adicionar-produto-detalhes-botoes"
            onClick={() => diminuirQuantidade()}
          >
            -
          </button>
          <input
            type="text"
            className="quantidade-produto-detalhes"
            disabled
            value={quantidade}
          />
          <button
            className="adicionar-produto-detalhes-botoes"
            onClick={() => aumentarQuantidade()}
          >
            +
          </button>
          <button className="botao-adicionar-produto-detalhes">
            Adicionar
            <MdOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProdutoDetalhes;
