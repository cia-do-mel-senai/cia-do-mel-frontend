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
  }, []);

  useEffect(() => {
    console.log(produtos);
  }, [produtos]);

  return (
    <div className="catalogo-container">
      <div className="produtos-container">
        <h2>Catalogo</h2>
        <div className="filtragem">
          <label htmlFor="filtragem-catalogo">Filtrar por</label>
          <select name="filtragem-catalogo" id="filtragem-catalogo">
            <option value="">Preço crescente</option>
            <option value="">Preço decrescente</option>
            <option value="">Ordenar de A a Z</option>
            <option value="">Ordenar de Z a A</option>
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
