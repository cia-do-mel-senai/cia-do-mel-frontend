import { useNavigate } from "react-router-dom";
import "./LoginUsuario.css";

const LoginUsuario = () => {
  const navigate = useNavigate();
  return (
    <div className="cadastro-usuario-container">
      <div className="cadastro-usuario-inputs">
        <h2>Login</h2>
        <label htmlFor="email-login">Email:</label>
        <input type="text" id="email-login" placeholder="Digite seu email." />
        <label htmlFor="senha-login">Senha:</label>
        <input type="text" id="senha-login" placeholder="Digite sua senha." />
        <p onClick={() => navigate("/cadastro-usuario")}>Não tem uma conta?</p>
        <button>Logar</button>
      </div>
    </div>
  );
};

export default LoginUsuario;
