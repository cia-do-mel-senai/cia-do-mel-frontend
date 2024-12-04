import React from "react";
import { MdDelete, MdRemove, MdAdd } from "react-icons/md";

const ProdutoCarrinho = ({
  produto,
  quantidade,
  onAdicionar,
  onDiminuir,
  onRemover,
}) => {
  return (
    <div className="produto">
      <img
        src={produto.imagem_produto}
        alt={produto.nome_produto}
        className="produto-imagem"
      />
      <div className="produto-info">
        <p>{produto.nome_produto}</p>
        <p>{`R$ ${Number(produto.preco_produto).toFixed(2)}`}</p>
        <div className="produto-controle">
          <button onClick={() => onDiminuir(produto)}>
            <MdRemove size={20} />
          </button>
          <span>{quantidade}</span>
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
