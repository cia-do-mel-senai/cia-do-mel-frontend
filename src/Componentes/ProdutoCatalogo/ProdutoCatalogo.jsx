/* eslint-disable react/prop-types */
import "./ProdutoCatalogo.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext/AppContext";
import { useState, useEffect } from "react";

const ProdutoCatalogo = ({ imagem, nome, preco, idProduto }) => {
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const [usuarioAdmin, setUsuarioAdmin] = useState(false);

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

  const navigate = useNavigate();
  return (
    <div className="produto-catalogo-container">
      <img src={imagem} />
      <p>
        <b>
          {nome} <br />
          R${preco}
        </b>
      </p>
      <button onClick={() => navigate(`/produto-detalhes/${idProduto}`)}>
        {usuarioAdmin ? "Editar" : "Comprar"}
      </button>
    </div>
  );
};

export default ProdutoCatalogo;
