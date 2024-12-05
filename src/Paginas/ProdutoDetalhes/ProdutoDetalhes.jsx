import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProdutoDetalhes.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import ServicoProduto from "../../services/ServicoProduto";
import { useAppContext } from "../../Componentes/AppContext/AppContext";
import Modal from "../../Componentes/Modal/Modal";
import ModalConfirmar from "../../Componentes/ModalConfirmar/ModalConfirmar";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { CarrinhoContext } from "../../Componentes/CarrinhoContext/CarrinhoContext";
const ProdutoDetalhes = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const servicoProduto = new ServicoProduto();
  const [produto, setProduto] = useState({});
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const [usuarioAdmin, setUsuarioAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
  const { produtosNoCarrinho, atualizarCarrinho } = useContext(CarrinhoContext);

  const abrirModalDeExclusao = () => {
    setModalExclusaoAberto(true);
  };

  const fecharModalDeExclusao = () => {
    setModalExclusaoAberto(false);
  };

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem("logado")) || null;
    if (logado) {
      atualizarUsuarioEstaLogado(true);
      if (logado.funcao === "admin") {
        setUsuarioAdmin(true);
      }
    } else {
      atualizarUsuarioEstaLogado(false);
    }
  }, [usuarioEstaLogado, atualizarUsuarioEstaLogado]);

  useEffect(() => {
    const pegarProduto = async () => {
      try {
        const produtoData = await servicoProduto.buscarProduto(id);

        setProduto(produtoData[0]);
      } catch (error) {
        console.error("Erro ao buscar o produto", error);
      }
    };
    pegarProduto();
  }, [id]);

  const editarProduto = async (produto, modalAberto, modalMensagem) => {
    try {
      const produtoData = await servicoProduto.editarProduto(
        produto,
        modalAberto,
        modalMensagem
      );
    } catch (error) {
      console.error("Erro ao buscar o produto", error);
    }
  };
  const excluirProduto = async (id, navigate) => {
    try {
      const produtoData = await servicoProduto.excluirProduto(id, navigate);
    } catch (error) {
      console.error("Erro ao excluir o produto", error);
    }
  };

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

  const adicionarProdutoCarrinho = () => {
    let produtosNoCarrinhoAtualizados = [...produtosNoCarrinho];
    const produtoNoCarrinhoIndex = produtosNoCarrinhoAtualizados.findIndex(
      (produtoCarrinho) => produtoCarrinho.id === produto.id_produto
    );

    if (produtoNoCarrinhoIndex >= 0) {
      produtosNoCarrinhoAtualizados[produtoNoCarrinhoIndex].quantidade +=
        quantidade;
    } else {
      produtosNoCarrinhoAtualizados.push({
        id: produto.id_produto,
        quantidade: quantidade,
      });
    }

    atualizarCarrinho(produtosNoCarrinhoAtualizados);

    setModalMessage("Produto adicionado no carrinho.");
    setIsModalOpen(true);
  };

  if (usuarioEstaLogado && usuarioAdmin) {
    return (
      <div className="produto-detalhes-container">
        <IoIosArrowBack
          className="detalhes-voltar"
          size={40}
          onClick={() => navigate("/catalogo-produto")}
        />
        <div className="editar-produto-detalhes">
          <img src={produto.imagem_produto} alt="" />
          <input
            type="file"
            accept="image/*"
            className="imagem-produto-input"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setProduto({ ...produto, imagem_produto: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <label htmlFor="nome-produto-input">Nome:</label>
          <input
            type="text"
            className="nome-produto-input"
            value={produto.nome_produto}
            onChange={(e) =>
              setProduto({ ...produto, nome_produto: e.target.value })
            }
          />

          <label htmlFor="descricao-produto-input">Descrição:</label>
          <textarea
            type="text"
            className="descricao-produto-input"
            value={produto.descricao_produto}
            onChange={(e) =>
              setProduto({ ...produto, descricao_produto: e.target.value })
            }
          />

          <label htmlFor="preco-produto-input">Preço:</label>
          <input
            type="text"
            className="preco-produto-input"
            value={produto.preco_produto}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                setProduto({
                  ...produto,
                  preco_produto: value,
                });
              }
            }}
          />

          <div className="acoes-produto">
            <button
              className="editar-produto-botao"
              onClick={() =>
                editarProduto(produto, setIsModalOpen, setModalMessage)
              }
            >
              Editar
            </button>

            <button
              className="excluir-produto-botao"
              onClick={setModalExclusaoAberto}
            >
              Excluir
            </button>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
        />
        <ModalConfirmar
          isOpen={modalExclusaoAberto}
          message={`Você tem certeza que deseja excluir ${produto.nome_produto}?`}
          onClose={fecharModalDeExclusao}
          onConfirm={() => excluirProduto(produto.id_produto, navigate)}
        />
      </div>
    );
  } else {
    return (
      <div className="produto-detalhes-container">
        <IoIosArrowBack
          className="detalhes-voltar"
          size={40}
          onClick={() => navigate("/catalogo-produto")}
        />
        <div className="produto-detalhes">
          <img src={produto.imagem_produto} alt="" />
          <p>{produto.nome_produto}</p>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: "normal",
              textAlign: "center",
              color: "white",
            }}
          >
            {produto.descricao_produto}
          </p>
          <p>R${produto.preco_produto}</p>
          <div className="adicionar-carrinho-produto">
            <button
              className="adicionar-produto-detalhes-botoes"
              onClick={() => diminuirQuantidade()}
            >
              <span className="icone">-</span>
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
              <span className="icone">+</span>
            </button>
            <button
              className="botao-adicionar-produto-detalhes"
              onClick={adicionarProdutoCarrinho}
            >
              <span>Adicionar</span>
              <MdOutlineShoppingCart />
            </button>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    );
  }
};
export default ProdutoDetalhes;
