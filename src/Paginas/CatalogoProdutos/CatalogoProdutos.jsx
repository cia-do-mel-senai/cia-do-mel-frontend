import ProdutoCatalogo from "../../Componentes/ProdutoCatalogo/ProdutoCatalogo";
import "./CatalogoProdutos.css";

const CatalogoProdutos = () => {
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
          <ProdutoCatalogo
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de mel"}
            preco={29.99}
          />
          <ProdutoCatalogo
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de mel"}
            preco={29.99}
          />
          <ProdutoCatalogo
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de mel"}
            preco={29.99}
          />
          <ProdutoCatalogo
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de mel"}
            preco={29.99}
          />
          <ProdutoCatalogo
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de mel"}
            preco={29.99}
          />
        </div>
      </div>
    </div>
  );
};
export default CatalogoProdutos;
