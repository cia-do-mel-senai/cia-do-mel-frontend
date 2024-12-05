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
  const [usuarioAdmin, setUsuarioAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem("logado")) || null;
    if (logado) {
      atualizarUsuarioEstaLogado(true);
      if (logado.funcao === "admin") {
        setUsuarioAdmin(true);
      }
    } else {
      atualizarUsuarioEstaLogado(false);
    }
  }, [usuarioEstaLogado, atualizarUsuarioEstaLogado]);

  const deslogar = () => {
    atualizarUsuarioEstaLogado(false);
    setUsuarioAdmin(false);
    setMenuVisible(false);
    localStorage.removeItem("logado");
    navigate("/");
  };

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="menu-container">
        <FaBars size={30} onClick={() => setMenuVisible(!menuVisible)} />

        <div
          className={`menu ${menuVisible ? "menu-animacao" : ""}`}
          ref={menuRef}
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

            {usuarioEstaLogado && usuarioAdmin && (
              <li
                onClick={() => {
                  navigate("/cadastro-produto");
                  setMenuVisible(false);
                }}
              >
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
