import "./CadastroProduto.css";

const CadastroProduto = () => {
  return (
    <div className="cadastro-usuario-container">
      <div className="cadastro-usuario-inputs">
        <h2>Cadastro</h2>
        <label htmlFor="nome-cadastro-produto">Nome:</label>
        <input
          type="text"
          id="nome-cadastro-produto"
          placeholder="Digite o nome do produto."
        />
        <label htmlFor="descricao-cadastro-produto">Descricao:</label>
        <input
          type="text"
          id="descricao-cadastro-produto"
          placeholder="Digite a descrição do produto."
        />
        <label htmlFor="preco-cadastro-produto">Preço:</label>
        <input
          type="number"
          id="preco-cadastro-produto"
          placeholder="Digite o preço do produto."
        />
        <label htmlFor="imagem-cadastro-produto">Imagem:</label>
        <input type="file" accept="image/*" id="confrimar-senha-cadastro" />
        <button>Cadastrar</button>
      </div>
    </div>
  );
};
export default CadastroProduto;
