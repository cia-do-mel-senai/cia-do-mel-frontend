import React from "react";
import { MdDelete, MdRemove, MdAdd } from "react-icons/md";

const ProdutoCarrinho = ({ produto, onAdicionar, onDiminuir, onRemover }) => {
  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
      <div className="produto-info">
        <p>{produto.nome}</p>
        <p>{`R$ ${produto.preco.toFixed(2)}`}</p>
        <div className="produto-controle">
          <button onClick={() => onDiminuir(produto)}>
            <MdRemove size={20} />
          </button>
          <span>{produto.quantidade}</span>
          <button onClick={() => onAdicionar(produto)}>
            <MdAdd size={20} />
          </button>
          <button onClick={() => onRemover(produto)}>
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoCarrinho;
