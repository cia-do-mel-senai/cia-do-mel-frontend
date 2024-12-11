import { useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";
import { useState } from "react";
import Modal from "../../Componentes/Modal/Modal";
import ServicoUsuario from "../../services/ServicoUsuario";

const CadastroUsuario = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const servicoUsuario = new ServicoUsuario();

  const criarUsuario = async () => {
    if (
      !nome.trim() ||
      !email.trim() ||
      !senha.trim() ||
      !confirmarSenha.trim()
    ) {
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

    if (senha.trim().length < 6) {
      setModalMessage("A senha deve ter no mínimo 6 caracteres.");
      setIsModalOpen(true);
      return;
    }

    if (senha.trim() !== confirmarSenha.trim()) {
      setModalMessage("As senhas não coincidem.");
      setIsModalOpen(true);
      return;
    }

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    try {
      await servicoUsuario.cadastrar(usuario, navigate);
    } catch (error) {
      setModalMessage(error.message);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="cadastro-usuario-container">
      <div className="cadastro-usuario-inputs">
        <h2>Cadastro</h2>
        <label htmlFor="nome-cadastro">Nome:</label>
        <input
          type="text"
          id="nome-cadastro"
          placeholder="Digite seu nome."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email-cadastro">Email:</label>
        <input
          type="email"
          id="email-cadastro"
          placeholder="Digite seu email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="senha-cadastro">Senha:</label>
        <input
          type="password"
          id="senha-cadastro"
          placeholder="Digite sua senha."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label htmlFor="confirmar-senha-cadastro">Confirmar senha:</label>
        <input
          type="password"
          id="confrimar-senha-cadastro"
          placeholder="Confirme sua senha."
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <p onClick={() => navigate("/login-usuario")}>Já tem uma conta?</p>
        <button onClick={criarUsuario}>Cadastrar</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
export default CadastroUsuario;
