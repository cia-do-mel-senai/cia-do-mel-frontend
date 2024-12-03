/* eslint-disable react/prop-types */
import "./ProdutoDestaque.css";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProdutoDestaque = ({ imagem, nome, id }) => {
  const navigate = useNavigate();
  return (
    <div className="produto-destaque-container">
      <img src={imagem} />
      <p>
        <b>{nome}</b>
      </p>
      <button onClick={() => navigate(`/produto-detalhes/${id}`)}>
        Ver Mais <IoMdSearch size={20} />
      </button>
    </div>
  );
};

export default ProdutoDestaque;
