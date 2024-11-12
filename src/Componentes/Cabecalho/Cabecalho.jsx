import "./Cabecalho.css";
import { MdOutlineHive } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
const Cabecalho = () => {
  return (
    <div className="cabecalho-container">
      <div className="cabecalho-logo">
        <img src={logo} />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <FaBars size={25} />
      </div>
    </div>
  );
};
export default Cabecalho;
