import { useState } from "react";
import "./CadastroProduto.css";
import Modal from "../../Componentes/Modal/Modal";
import ServicoProduto from "../../services/ServicoProduto";

const CadastroProduto = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [imagem, setImagem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const servicoProduto = new ServicoProduto();

  const mudarImagem = (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagem(reader.result);
        console.log(reader.result);
      };

      reader.readAsDataURL(arquivo);
    }
  };

  const cadastrarProduto = () => {
    if (!nome.trim() || !descricao.trim || !preco || preco <= 0 || !imagem) {
      setIsModalOpen(true);
      setModalMessage("Preencha todos os campos.");
    }

    const produto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: preco,
      imagem: imagem,
    };

    servicoProduto.cadastrar(produto, setIsModalOpen, setModalMessage);
  };

  return (
    <div className="cadastro-usuario-container">
      <div className="cadastro-usuario-inputs">
        <h2>Cadastro</h2>
        <label htmlFor="nome-cadastro-produto">Nome:</label>
        <input
          type="text"
          id="nome-cadastro-produto"
          placeholder="Digite o nome do produto."
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="descricao-cadastro-produto">Descricao:</label>
        <input
          type="text"
          id="descricao-cadastro-produto"
          placeholder="Digite a descrição do produto."
          onChange={(e) => setDescricao(e.target.value)}
        />
        <label htmlFor="preco-cadastro-produto">Preço:</label>
        <input
          type="number"
          id="preco-cadastro-produto"
          placeholder="Digite o preço do produto."
          min={0.01}
          onChange={(e) => setPreco(e.target.value)}
        />
        <label htmlFor="imagem-cadastro-produto">Imagem:</label>
        <input
          type="file"
          accept="image/*"
          id="confrimar-senha-cadastro"
          onChange={(e) => mudarImagem(e)}
        />
        <img src={imagem} alt="" />
        <button onClick={() => cadastrarProduto()}>Cadastrar</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
export default CadastroProduto;
