import "./ProdutoDestaque.css";
import { IoMdSearch } from "react-icons/io";

const ProdutoDestaque = ({ imagem, nome }) => {
  return (
    <div className="produto-destaque-container">
      <img src={imagem} />
      <p>
        <b>{nome}</b>
      </p>
      <button>
        Ver Mais <IoMdSearch size={20} />
      </button>
    </div>
  );
};

export default ProdutoDestaque;
