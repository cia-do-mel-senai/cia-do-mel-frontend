import "./Menu.css";
import { useEffect, useState, useRef } from "react";
import { FaUserCheck, FaUserPlus, FaBars } from "react-icons/fa";
import { GiBeehive } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  // Cria uma referência para o menu
  const menuRef = useRef(null);

  // Função para detectar cliques fora do menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false); // Fecha o menu se o clique for fora dele
    }
  };

  useEffect(() => {
    // Adiciona o listener de clique fora
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="menu-container">
        <FaBars size={30} onClick={() => setMenuVisible(!menuVisible)} />

        {/* Menu com referência */}
        <div
          className={`menu ${menuVisible ? "menu-animacao" : ""}`}
          ref={menuRef} // Atribui a referência ao menu
        >
          <ul>
            <li
              onClick={() => {
                navigate("catalogo-produto");
                setMenuVisible(false);
              }}
            >
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
    </>
  );
};

export default Menu;
