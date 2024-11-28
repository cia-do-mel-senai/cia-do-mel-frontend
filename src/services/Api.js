import axios from "axios";

const instanciaApi = axios.create({
  baseURL: "https://cia-do-mel-api.onrender.com",
});

export default instanciaApi;
