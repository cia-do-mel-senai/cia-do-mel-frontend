import "./Carrinho.css";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";

const Carrinho = () => {
  const [carrinhoVisible, setCarrinhoVisible] = useState(false);
  const [produtos, setProdutos] = useState([]);

  // Função para adicionar produto
  const adicionarProduto = (produto) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  // Função para remover produto
  const removerProduto = (produto) => {
    setProdutos((prevProdutos) =>
      prevProdutos
        .map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  // Função para diminuir produto
  const diminuirProduto = (produto) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((item) =>
        item.id === produto.id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  // Calcular o total do carrinho
  const calcularTotal = () => {
    return produtos
      .reduce((total, produto) => total + produto.preco * produto.quantidade, 0)
      .toFixed(2);
  };

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
          <h2>Carrinho de Compras</h2>
          <div className="produtos-lista">
            {produtos.map((produto) => (
              <ProdutoCarrinho
                key={produto.id}
                produto={produto}
                onAdicionar={adicionarProduto}
                onRemover={removerProduto}
                onDiminuir={diminuirProduto}
              />
            ))}
          </div>
          <div className="total">
            <h3>Total: R$ {calcularTotal()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
