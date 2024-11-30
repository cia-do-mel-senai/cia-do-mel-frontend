/* eslint-disable react/prop-types */
import "./ProdutoCatalogo.css";
import { useNavigate } from "react-router-dom";

const ProdutoCatalogo = ({ imagem, nome, preco, idProduto }) => {
  const navigate = useNavigate();
  return (
    <div className="produto-catalogo-container">
      <img src={imagem} />
      <p>
        <b>
          {nome} <br />
          R${preco}
        </b>
      </p>
      <button onClick={() => navigate(`/produto-detalhes/${idProduto}`)}>
        Comprar
      </button>
    </div>
  );
};

export default ProdutoCatalogo;
