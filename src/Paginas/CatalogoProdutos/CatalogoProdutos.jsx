import ProdutoCatalogo from "../../Componentes/ProdutoCatalogo/ProdutoCatalogo";
import "./CatalogoProdutos.css";
import ServicoProduto from "../../services/ServicoProduto";
import { useEffect, useState } from "react";

const CatalogoProdutos = () => {
  const servicoProduto = new ServicoProduto();
  const [produtos, setProdutos] = useState([]);

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
    console.log(produtos);
  }, [produtos]);

  const filtrar = (filtro) => {
    switch (true) {
      case filtro === "crescente:":
        break;
      case filtro === "descrescente:":
        break;
      case filtro === "a-z:":
        break;
      case filtro === "z-a:":
        break;
    }
  };

  return (
    <div className="catalogo-container">
      <div className="produtos-container">
        <h2>Catalogo</h2>
        <div className="filtragem">
          <label htmlFor="filtragem-catalogo">Filtrar por</label>
          <select
            name="filtragem-catalogo"
            id="filtragem-catalogo"
            onChange={(e) => filtrar(e.target.value)}
          >
            <option value="crescente">Preço crescente</option>
            <option value="descrescente">Preço decrescente</option>
            <option value="a-z">Ordenar de A a Z</option>
            <option value="z-a">Ordenar de Z a A</option>
          </select>
        </div>
        <div className="produtos-catalogo-container">
          {produtos.map((produto, index) => {
            return (
              <ProdutoCatalogo
                imagem={produto.imagem_produto}
                nome={produto.nome_produto}
                preco={produto.preco_produto}
                key={index}
                idProduto={produto.id_produto}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CatalogoProdutos;
