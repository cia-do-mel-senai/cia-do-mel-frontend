import "./Menu.css";
import { useEffect, useState, useRef } from "react";
import { FaUserCheck, FaUserPlus, FaBars } from "react-icons/fa";
import { GiBeehive } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";
import { useAppContext } from "../AppContext/AppContext";
import { IoBagAddSharp } from "react-icons/io5";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem("logado")) || null;
    if (logado) {
      atualizarUsuarioEstaLogado(true);
      setUsuarioLogado(JSON.parse(localStorage.getItem("logado")));
    } else {
      atualizarUsuarioEstaLogado(false);
    }
  }, []);

  const deslogar = () => {
    atualizarUsuarioEstaLogado(false);
    setUsuarioLogado({});
    setMenuVisible(false);
    localStorage.removeItem("logado");
    navigate("/");
  };

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
            {!usuarioEstaLogado && (
              <>
                <li
                  onClick={() => {
                    navigate("cadastro-usuario");
                    setMenuVisible(false);
                  }}
                >
                  <FaUserPlus size={20} />
                  Cadastrar
                </li>
                <li
                  onClick={() => {
                    navigate("login-usuario");
                    setMenuVisible(false);
                  }}
                >
                  <FaUserCheck size={20} />
                  Login
                </li>
              </>
            )}

            {usuarioEstaLogado && (
              <li onClick={() => deslogar()}>
                <IoLogOutSharp size={20} />
                Sair
              </li>
            )}

            {usuarioEstaLogado && usuarioLogado.funcao === "admin" && (
              <li>
                <IoBagAddSharp size={20} />
                Cadastrar
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
