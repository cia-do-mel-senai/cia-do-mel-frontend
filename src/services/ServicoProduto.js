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
}

export default ServicoProduto;
