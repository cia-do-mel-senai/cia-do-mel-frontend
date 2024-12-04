import axios from "axios";

const url = "https://cia-do-mel-api.onrender.com";

const instanciaApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default instanciaApi;
