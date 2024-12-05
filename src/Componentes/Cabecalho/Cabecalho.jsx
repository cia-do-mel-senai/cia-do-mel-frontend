import { useNavigate, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Cabecalho.css";

import logo from "./logo.svg";
import { IoMdSearch } from "react-icons/io";
import Carrinho from "../Carrinho/Carrinho";
import { useState, useEffect } from "react";

const Cabecalho = () => {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");
  const location = useLocation();
  const checarEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/catalogo-produto?busca=${encodeURIComponent(pesquisa)}`);
    }
  };

  return (
    <div className="cabecalho-container">
      <div className="cabecalho-logo">
        <img src={logo} onClick={() => navigate("/")} />
      </div>
      <div className="cabecalho-pesquisar">
        <IoMdSearch className="pesquisar-icone" />
        <input
          type="text"
          placeholder="ZzZzz....."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          onKeyDown={(e) => checarEnter(e)}
        />
        {pesquisa && (
          <button
            className="botao-limpar"
            onClick={() => {
              setPesquisa("");
              if (location.pathname === "/catalogo-produto") {
                navigate("/catalogo-produto");
              }
            }}
          >
            &times;
          </button>
        )}
      </div>

      <div>
        <Carrinho />
      </div>
      <Menu />
    </div>
  );
};
export default Cabecalho;
