import ProdutoCatalogo from "../../Componentes/ProdutoCatalogo/ProdutoCatalogo";
import "./CatalogoProdutos.css";
import ServicoProduto from "../../services/ServicoProduto";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CatalogoProdutos = () => {
  const servicoProduto = new ServicoProduto();
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const location = useLocation();

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

  const filtrar = (filtro) => {
    let produtosFiltrados = [...produtos];
    switch (true) {
      case filtro === "crescente":
        produtosFiltrados = produtosFiltrados.sort(
          (a, b) => a.preco_produto - b.preco_produto
        );
        break;
      case filtro === "descrescente":
        produtosFiltrados = produtosFiltrados.sort(
          (a, b) => b.preco_produto - a.preco_produto
        );
        break;
      case filtro === "a-z":
        produtosFiltrados = produtosFiltrados.sort((a, b) =>
          a.nome_produto.localeCompare(b.nome_produto)
        );
        break;
      case filtro === "z-a":
        produtosFiltrados = produtosFiltrados
          .sort((a, b) => a.nome_produto.localeCompare(b.nome_produto))
          .reverse();
        break;
      default:
        break;
    }
    const params = new URLSearchParams(location.search);
    const pesquisa = params.get("busca");
    if (pesquisa !== null) {
      produtosFiltrados = produtosFiltrados.filter((produto) =>
        produto.nome_produto.toLowerCase().includes(pesquisa.toLowerCase())
      );
    }

    if (produtosFiltrados.length < 1) {
      return <p>Produto não encontrado.</p>;
    }
    return produtosFiltrados.map((produto, index) => {
      return (
        <ProdutoCatalogo
          imagem={produto.imagem_produto}
          nome={produto.nome_produto}
          preco={produto.preco_produto}
          key={index}
          idProduto={produto.id_produto}
        />
      );
    });
  };

  return (
    <div className="catalogo-container">
      <div className="produtos-container">
        <h2>Catálogo</h2>
        <div className="filtragem">
          <label htmlFor="filtragem-catalogo">Filtro:</label>
          <select
            name="filtragem-catalogo"
            id="filtragem-catalogo"
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">Sem filtro</option>
            <option value="crescente">Preço crescente</option>
            <option value="descrescente">Preço decrescente</option>
            <option value="a-z">Ordenar de A a Z</option>
            <option value="z-a">Ordenar de Z a A</option>
          </select>
        </div>
        <div className="produtos-catalogo-container">{filtrar(filtro)}</div>
      </div>
    </div>
  );
};
export default CatalogoProdutos;
