import "./Cabecalho.css";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { IoMdSearch } from "react-icons/io";
const Cabecalho = () => {
  return (
    <div className="cabecalho-container">
      <div className="cabecalho-logo">
        <img src={logo} />
      </div>
      <div className="cabecalho-pesquisar">
        <IoMdSearch className="pesquisar-icone" />
        <input type="text" placeholder="ZzZzz....." />
      </div>
      <div className="cabecalho-icone">
        <FaBars size={25} />
      </div>
    </div>
  );
};
export default Cabecalho;
