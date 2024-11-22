import { useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";

const CadastroUsuario = () => {
  const navigate = useNavigate();

  return (
    <div className="cadastro-usuario-container">
      <div className="cadastro-usuario-inputs">
        <h2>Cadastro</h2>
        <label htmlFor="nome-cadastro">Nome:</label>
        <input type="text" id="nome-cadastro" placeholder="Digite seu nome." />
        <label htmlFor="email-cadastro">Email:</label>
        <input
          type="text"
          id="email-cadastro"
          placeholder="Digite seu email."
        />
        <label htmlFor="senha-cadastro">Senha:</label>
        <input
          type="text"
          id="senha-cadastro"
          placeholder="Digite sua senha."
        />
        <label htmlFor="confirmar-senha-cadastro">Confirmar senha:</label>
        <input
          type="text"
          id="confrimar-senha-cadastro"
          placeholder="Confirme sua senha."
        />
        <p onClick={() => navigate("/login-usuario")}>Já tem uma conta?</p>
        <button>Cadastrar</button>
      </div>
    </div>
  );
};
export default CadastroUsuario;
