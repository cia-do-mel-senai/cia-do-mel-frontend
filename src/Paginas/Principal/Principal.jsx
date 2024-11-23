import { useNavigate } from "react-router-dom";
import ProdutoDestaque from "../../Componentes/ProdutoDestaque/ProdutoDestaque";
import "./Principal.css";

const Principal = () => {
  const navigate = useNavigate();
  return (
    <div className="principal-container">
      <div className="produtos-destaque-principal">
        <div className="produtos-destaque">
          <ProdutoDestaque
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de Mel"}
          />
          <ProdutoDestaque
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de Mel"}
          />
          <ProdutoDestaque
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de Mel"}
          />
          <ProdutoDestaque
            imagem={
              "https://www.lojaapicola.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/e/mel_pote_1kg_frente.jpg"
            }
            nome={"Pote de Mel"}
          />
        </div>
        <button
          style={{
            backgroundColor: "var(--cor-amarelo)",
            padding: "10px",
            width: "70%",
            borderRadius: "20px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginTop: "15px",
            border: "none",
          }}
          onClick={() => navigate("/catalogo-produto")}
        >
          Ver Todos
        </button>
      </div>
      <div className="texto-pagina-principal">
        <p>
          <h2>Cia do Mel</h2>
          Bem-vindo à Cia do Mel!
          <br />
          <br />
          Aqui, você encontra mel 100% puro, extraído de forma sustentável para
          oferecer sabor e qualidade excepcionais.
          <br />
          <br />
          Por que escolher a Cia do Mel?
          <br />
          <br />
          - Mel fresco e natural, direto das melhores colmeias. <br />-
          Variedade de tipos e sabores. <br />- Compromisso com a
          sustentabilidade e preservação das abelhas.
          <br />
          <br />
          Explore nossa seleção e descubra os benefícios do mel para sua saúde e
          bem-estar.
          <br />
          <br />
          Compre agora e aproveite nosso frete grátis para todo o Brasil em
          compras acima de R$99!
        </p>
      </div>
    </div>
  );
};
export default Principal;
