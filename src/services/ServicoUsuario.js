import instanciaApi from "./Api";

class ServicoUsuario {
  async listar() {
    try {
      const resposta = await fetch("http://localhost:3000/usuarios", {
        method: "GET",
      });

      if (!resposta.ok) {
        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
      }

      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.error(error);
    }
  }
  async cadastrar(usuario, navigate) {
    try {
      const response = await instanciaApi.post("/usuarios", usuario);

      if (response.status !== 200) {
        throw new Error(response.data.mensagem || "Erro desconhecido");
      }
      navigate("/login-usuario");
    } catch (error) {
      console.error("Erro ao listar os produtos:", error);
      throw error;
    }
  }
  async logar(
    usuario,
    navigate,
    modalAberto,
    modalMensagem,
    atualizarUsuarioLogado
  ) {
    try {
      const response = await instanciaApi.post("/logar", usuario);

      if (response.status !== 200) {
        throw new Error(response.data.mensagem || "Erro desconhecido");
      }

      localStorage.setItem("logado", JSON.stringify(response.data.usuario));
      atualizarUsuarioLogado(true);
      navigate("/catalogo-produto");
    } catch (error) {
      modalMensagem(`${String(error).replace("Error: ", "")}`);
      modalAberto(true);
    }
  }
}

export default ServicoUsuario;
