import "./Carrinho.css";
import { useState, useEffect, useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";
import ServicoProduto from "../../services/ServicoProduto";
import { CarrinhoContext } from "../CarrinhoContext/CarrinhoContext";
import { GrUserAdmin } from "react-icons/gr";
import { useAppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
  const [carrinhoVisible, setCarrinhoVisible] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const { produtosNoCarrinho, atualizarCarrinho } = useContext(CarrinhoContext);
  const servicoProduto = new ServicoProduto();
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const [usuarioAdmin, setUsuarioAdmin] = useState(false);
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
    // Carregar os produtos da API
    const pegarProdutos = async () => {
      try {
        const produtosData = await servicoProduto.listar();
        setProdutos(produtosData);
      } catch (error) {
        console.error("Erro ao buscar os produtos", error);
      }
    };
    pegarProdutos();
  }, []);

  useEffect(() => {
    // Função que obtém o carrinho do localStorage
    const obterCarrinho = () => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      console.log("Carrinho carregado do localStorage:", carrinho); // Log de depuração
      atualizarCarrinho(carrinho); // Atualiza o estado com os itens do carrinho
    };

    obterCarrinho(); // Carrega o carrinho ao inicializar o componente

    const handleStorageChange = () => {
      console.log("localStorage mudou!"); // Log de depuração
      obterCarrinho(); // Atualiza o estado quando o localStorage mudar
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
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
    }
  };

  return (
    <div className="carrinho-container">
      {usuarioAdmin && usuarioEstaLogado ? (
        <GrUserAdmin size={30} />
      ) : (
        <MdOutlineShoppingCart
          size={30}
          onClick={() => setCarrinhoVisible(!carrinhoVisible)}
        />
      )}

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
          <h2>Meu Carrinho</h2>
          <div className="produtos-lista">{mostrarCarrinho()}</div>
          <div className="carrinho-footer">
            <div className="total">
              <h3>Total: R$ {calcularTotal()}</h3>
            </div>
            <button className="finalizar-compra" onClick={finalizarCompra}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
