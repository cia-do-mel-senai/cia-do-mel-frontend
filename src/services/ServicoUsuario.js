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
      const resposta = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!resposta.ok) {
        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
      }
      navigate("/login-usuario");
    } catch (error) {
      console.error(error);
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
      const resposta = await fetch("http://localhost:3000/logar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!resposta.ok) {
        const erro = await resposta.json();
        throw new Error(erro.mensagem || "Erro desconhecido");
      }

      const resultado = await resposta.json();
      localStorage.setItem("logado", JSON.stringify(resultado.usuario));
      atualizarUsuarioLogado(true);
      navigate("/catalogo-produto");
    } catch (error) {
      modalMensagem(`${String(error).replace("Error: ", "")}`);
      modalAberto(true);
    }
  }
}

export default ServicoUsuario;
