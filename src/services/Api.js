import axios from "axios";

const url = "https://cia-do-mel-api.onrender.com";

const instanciaApi = axios.create({
  baseURL: url,
});

export default instanciaApi;
