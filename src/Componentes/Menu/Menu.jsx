import "./Menu.css";
import { useState } from "react";
import { FaUserCheck, FaUserPlus, FaBars } from "react-icons/fa";
import { GiBeehive } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <FaBars size={30} onClick={() => setMenuVisible(!menuVisible)} />

      <div className={`menu ${menuVisible ? "menu-animacao" : ""}`}>
        <ul>
          <li>
            <GiBeehive />
            Catalogo
          </li>
          <li
            onClick={() => {
              navigate("cadastro-usuario");
              setMenuVisible(false);
            }}
          >
            <FaUserPlus />
            Cadastrar
          </li>
          <li
            onClick={() => {
              navigate("login-usuario");
              setMenuVisible(false);
            }}
          >
            <FaUserCheck />
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
