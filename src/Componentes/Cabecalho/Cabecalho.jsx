import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Cabecalho.css";

import logo from "./logo.svg";
import { IoMdSearch } from "react-icons/io";
import Carrinho from "../Carrinho/Carrinho";

const Cabecalho = () => {
  const navigate = useNavigate();

  return (
    <div className="cabecalho-container">
      <div className="cabecalho-logo">
        <img src={logo} onClick={() => navigate("/")} />
      </div>
      <div className="cabecalho-pesquisar">
        <IoMdSearch className="pesquisar-icone" />
        <input type="text" placeholder="ZzZzz....." />
      </div>
      <div>
        <Carrinho />
      </div>
      <Menu />
    </div>
  );
};
export default Cabecalho;
