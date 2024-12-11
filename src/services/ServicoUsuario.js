import instanciaApi from "./Api";

class ServicoUsuario {
  async cadastrar(usuario, navigate) {
    try {
      const response = await instanciaApi.post("/usuarios", usuario);

      if (response.status === 201) {
        navigate("/login-usuario");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.mensagem
      ) {
        throw new Error(error.response.data.mensagem);
      } else {
        throw new Error("Erro desconhecido. Tente novamente mais tarde.");
      }
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

      if (response.status === 200) {
        localStorage.setItem("logado", JSON.stringify(response.data.usuario));
        atualizarUsuarioLogado(true);
        navigate("/catalogo-produto");
      } else {
        throw new Error(response.data.mensagem || "Erro desconhecido");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.mensagem
      ) {
        modalMensagem(error.response.data.mensagem);
      } else {
        modalMensagem("Erro desconhecido. Tente novamente mais tarde.");
      }
      modalAberto(true);
    }
  }
}

export default ServicoUsuario;
