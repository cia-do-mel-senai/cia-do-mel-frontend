import { Navigate } from "react-router-dom";

const checarAdm = () => {
  const usuario = JSON.parse(localStorage.getItem("logado")) || null;
  if (usuario === null || usuario.funcao === "usuario") {
    return false;
  } else {
    return true;
  }
};

// eslint-disable-next-line react/prop-types
const VerificadorAdmin = ({ children }) => {
  const adminLogado = checarAdm();
  if (!adminLogado) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default VerificadorAdmin;
