import "./Menu.css";
import { useState } from "react";
import { FaUserCheck, FaUserPlus, FaBars } from "react-icons/fa";
import { GiBeehive } from "react-icons/gi";
const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="menu-container">
      <FaBars size={30} onClick={() => setMenuVisible(!menuVisible)} />
      <div className={`menu ${menuVisible ? "menu-animacao" : ""}`}>
        <ul>
          <li>
            <GiBeehive />
            Catalogo
          </li>
          <li>
            <FaUserPlus />
            Cadastrar
          </li>
          <li>
            <FaUserCheck />
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
