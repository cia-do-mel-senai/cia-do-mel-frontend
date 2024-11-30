import instanciaApi from "./Api";

class ServicoProduto {
  async cadastrar(produto, modalAberto, modalMensagem) {
    try {
      const response = await instanciaApi.post("/produtos", produto);

      if (response.status !== 200) {
        throw new Error(response.data || "Erro desconhecido");
      }

      modalMensagem("Produto cadastrado com sucesso!");
      modalAberto(true);
    } catch (error) {
      console.log(error);
    }
  }
  async listar() {
    try {
      const response = await instanciaApi.get("/produtos");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao listar os produtos:", error);
      throw error;
    }
  }
  async buscarProduto(id_produto) {
    try {
      const response = await instanciaApi.get(`/produtos/${id_produto}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao listar os produtos:", error);
      throw error;
    }
  }
  async excluirProduto(id_produto, navigate) {
    try {
      const response = await instanciaApi.delete(`/produtos/${id_produto}`);
      console.log(response.data);
      navigate("/catalogo-produto");
      return response.data;
    } catch (error) {
      console.error("Erro ao listar os produtos:", error);
      throw error;
    }
  }
  async editarProduto(produto, modalAberto, modalMensagem) {
    try {
      const response = await instanciaApi.put(`/produtos`, produto);
      console.log(response.data);
      modalMensagem("Produto editado com sucesso!");
      modalAberto(true);
      return response.data;
    } catch (error) {
      console.error("Erro ao listar os produtos:", error);
      throw error;
    }
  }
}

export default ServicoProduto;
