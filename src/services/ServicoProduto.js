import instanciaApi from "./Api";

class ServicoProduto {
  async cadastrar(produto, modalAberto, modalMensagem) {
    try {
      const response = instanciaApi.post("/produtos", produto);

      if (response.status !== 200) {
        throw new Error(response.data || "Erro desconhecido");
      }

      modalMensagem(response.data);
      modalAberto(true);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ServicoProduto;
