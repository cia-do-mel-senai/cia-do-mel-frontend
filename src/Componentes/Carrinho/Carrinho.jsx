import "./Carrinho.css";
import { useState, useEffect, useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";
import ServicoProduto from "../../services/ServicoProduto";
import { CarrinhoContext } from "../CarrinhoContext/CarrinhoContext";
import { GrUserAdmin } from "react-icons/gr";
import { useAppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Modal from "../Modal/Modal";

const Carrinho = () => {
  const [carrinhoVisible, setCarrinhoVisible] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const { produtosNoCarrinho, atualizarCarrinho } = useContext(CarrinhoContext);
  const servicoProduto = new ServicoProduto();
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const [usuarioAdmin, setUsuarioAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

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
    const pegarProdutos = async () => {
      try {
        const produtosData = await servicoProduto.listar();
        setProdutos(produtosData);
      } catch (error) {
        console.error("Erro ao buscar os produtos", error);
      }
    };
    pegarProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const obterCarrinho = () => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      atualizarCarrinho(carrinho);
    };

    obterCarrinho();

    const handleStorageChange = () => {
      obterCarrinho();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mostrarCarrinho = () => {
    return produtosNoCarrinho.map((produtoCarrinho) => {
      const produto = produtos.find(
        (produto) => produtoCarrinho.id === produto.id_produto
      );
      if (produto) {
        return (
          <ProdutoCarrinho
            key={produtoCarrinho.id}
            quantidade={produtoCarrinho.quantidade}
            produto={produto}
            onAdicionar={adicionarProduto}
            onRemover={removerProduto}
            onDiminuir={diminuirProduto}
          />
        );
      }
      return null;
    });
  };

  const adicionarProduto = (produto) => {
    const updatedCarrinho = produtosNoCarrinho.map((item) =>
      item.id === produto.id_produto
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    );

    if (!updatedCarrinho.find((item) => item.id === produto.id_produto)) {
      updatedCarrinho.push({
        id: produto.id_produto,
        quantidade: 1,
      });
    }

    atualizarCarrinho(updatedCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(updatedCarrinho));
  };

  const removerProduto = (produto) => {
    const updatedCarrinho = produtosNoCarrinho.filter(
      (item) => item.id !== produto.id_produto
    );

    atualizarCarrinho(updatedCarrinho);

    localStorage.setItem("carrinho", JSON.stringify(updatedCarrinho));
  };

  const diminuirProduto = (produto) => {
    const updatedCarrinho = produtosNoCarrinho.map((item) =>
      item.id === produto.id_produto && item.quantidade > 1
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    );

    atualizarCarrinho(updatedCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(updatedCarrinho));
  };

  const calcularTotal = () => {
    let valorTotal = 0;
    produtosNoCarrinho.forEach((produtoCarrinho) => {
      const produto = produtos.find(
        (produto) => produtoCarrinho.id === produto.id_produto
      );
      if (produto) {
        valorTotal +=
          Number(produto.preco_produto) * Number(produtoCarrinho.quantidade);
      }
    });
    return valorTotal.toFixed(2);
  };

  const finalizarCompra = () => {
    if (!usuarioEstaLogado) {
      setCarrinhoVisible(false);
      navigate("/login-usuario");
      return;
    }
    if (produtosNoCarrinho.length < 1) {
      setModalMessage("Coloque algum produto no carrinho.");
      setIsModalOpen(true);
      setCarrinhoVisible(false);
      navigate("catalogo-produto");
      return;
    }
    localStorage.removeItem("carrinho");
    atualizarCarrinho([]);
    setModalMessage("Pedido feito com sucesso, você será contatado no email.");
    setIsModalOpen(true);
    setCarrinhoVisible(false);
  };

  return (
    <>
      <div className="carrinho-container">
        <div className="carrinho-icone">
          {usuarioAdmin && usuarioEstaLogado ? (
            <GrUserAdmin size={30} />
          ) : (
            <MdOutlineShoppingCart
              size={30}
              onClick={() => setCarrinhoVisible(!carrinhoVisible)}
            />
          )}
          {produtosNoCarrinho.length > 0 ? (
            <div className="carrinho-com-produto">
              {produtosNoCarrinho.length}
            </div>
          ) : null}
        </div>

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
            <IoIosArrowBack
              className="carrinho-voltar"
              size={40}
              onClick={() => setCarrinhoVisible(false)}
            />
            <h2>Meu Carrinho</h2>
            <div className="produtos-lista">{mostrarCarrinho()}</div>
            <div className="carrinho-footer">
              <div className="total">
                <h3>Total: R$ {calcularTotal()}</h3>
              </div>
              <button className="finalizar-compra" onClick={finalizarCompra}>
                Fazer pedido
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Carrinho;
