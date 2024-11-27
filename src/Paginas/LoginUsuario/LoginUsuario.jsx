import { useNavigate } from "react-router-dom";
import "./LoginUsuario.css";
import { useState } from "react";
import Modal from "../../Componentes/Modal/Modal";
import ServicoUsuario from "../../services/ServicoUsuario";
import { useAppContext } from "../../Componentes/AppContext/AppContext";

const LoginUsuario = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { usuarioEstaLogado, atualizarUsuarioEstaLogado } = useAppContext();
  const servicoUsuario = new ServicoUsuario();

  const logarUsuario = () => {
    if (!email.trim() || !senha.trim()) {
      setModalMessage("Por favor, preencha todos os campos.");
      setIsModalOpen(true);
      return;
    }

    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"
    );
    if (!emailRegex.test(email.trim())) {
      setModalMessage("Por favor, insira um e-mail válido.");
      setIsModalOpen(true);
      return;
    }

    const usuario = {
      email: email,
      senha: senha,
    };

    servicoUsuario.logar(
      usuario,
      navigate,
      setIsModalOpen,
      setModalMessage,
      atualizarUsuarioEstaLogado
    );
  };
  return (
    <div className="cadastro-usuario-container">
      <div className="cadastro-usuario-inputs">
        <h2>Login</h2>
        <label htmlFor="email-login">Email:</label>
        <input
          type="email"
          id="email-login"
          placeholder="Digite seu email."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="senha-login">Senha:</label>
        <input
          type="password"
          id="senha-login"
          placeholder="Digite sua senha."
          onChange={(e) => setSenha(e.target.value)}
        />
        <p onClick={() => navigate("/cadastro-usuario")}>Não tem uma conta?</p>
        <button onClick={logarUsuario}>Logar</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LoginUsuario;
