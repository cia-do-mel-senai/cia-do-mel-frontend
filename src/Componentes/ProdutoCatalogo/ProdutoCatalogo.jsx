/* eslint-disable react/prop-types */
import "./ProdutoCatalogo.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext/AppContext";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import ModalConfirmar from "../../Componentes/ModalConfirmar/ModalConfirmar";
import ServicoProduto from "../../services/ServicoProduto";

const ProdutoCatalogo = ({ imagem, nome, preco, idProduto }) => {
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const [usuarioAdmin, setUsuarioAdmin] = useState(false);
  const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
  const servicoProduto = new ServicoProduto();

  const abrirModalDeExclusao = () => {
    setModalExclusaoAberto(true);
  };

  const fecharModalDeExclusao = () => {
    setModalExclusaoAberto(false);
  };

  const excluirProduto = async (id, navigate) => {
    try {
      await servicoProduto.excluirProduto(id, navigate);
      location.reload();
    } catch (error) {
      console.error("Erro ao excluir o produto", error);
    }
  };

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
    <>
      <div className="produto-catalogo-container">
        <img src={imagem} />
        <p>
          <b>
            {nome} <br />
            R${preco}
          </b>
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button onClick={() => navigate(`/produto-detalhes/${idProduto}`)}>
            {usuarioAdmin ? "Editar" : "Comprar"}
          </button>
          {usuarioAdmin && (
            <FaTrash size={20} color="#f44336" onClick={abrirModalDeExclusao} />
          )}
        </div>
      </div>
      <ModalConfirmar
        isOpen={modalExclusaoAberto}
        message={`Você tem certeza que deseja excluir ${nome}?`}
        onClose={fecharModalDeExclusao}
        onConfirm={() => excluirProduto(idProduto, navigate)}
      />
    </>
  );
};

export default ProdutoCatalogo;
