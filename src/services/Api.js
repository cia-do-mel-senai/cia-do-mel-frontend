import axios from "axios";

const instanciaApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default instanciaApi;
