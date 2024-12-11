import { useNavigate } from "react-router-dom";
import ProdutoDestaque from "../../Componentes/ProdutoDestaque/ProdutoDestaque";
import "./Principal.css";
import { useEffect, useState } from "react";
import ServicoProduto from "../../services/ServicoProduto";

const Principal = () => {
  const navigate = useNavigate();
  const servicoProduto = new ServicoProduto();

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const pegarProdutos = async () => {
      try {
        const produtosData = await servicoProduto.pegarUltimosProdutos();
        setProdutos(produtosData);
      } catch (error) {
        console.error("Erro ao buscar os produtos", error);
      }
    };
    pegarProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="principal-container">
      <div className="produtos-destaque-principal">
        <div className="produtos-destaque">
          {produtos.map((produto, index) => {
            return (
              <ProdutoDestaque
                key={index}
                imagem={produto.imagem_produto}
                nome={produto.nome_produto}
                id={produto.id_produto}
              />
            );
          })}
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
          Ver Produtos
        </button>
      </div>
      <div className="texto-pagina-principal">
        <h2 style={{ color: "white" }}>Cia do Mel</h2>
        <p>
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
