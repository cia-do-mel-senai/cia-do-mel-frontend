import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Principal from "./Paginas/Principal/Principal";
import Rodape from "./Componentes/Rodape/Rodape";
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";
import LoginUsuario from "./Paginas/LoginUsuario/LoginUsuario";
import CatalogoProdutos from "./Paginas/CatalogoProdutos/CatalogoProdutos";
import ProdutoDetalhes from "./Paginas/ProdutoDetalhes/ProdutoDetalhes";
import CadastroProduto from "./Paginas/CadastroProduto/CadastroProduto";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
    },
    {
      path: "cadastro-usuario",
      element: <CadastroUsuario />,
    },
    {
      path: "login-usuario",
      element: <LoginUsuario />,
    },
    {
      path: "catalogo-produto",
      element: <CatalogoProdutos />,
    },
    {
      path: "produto-detalhes",
      element: <ProdutoDetalhes />,
    },
    {
      path: "cadastro-produto",
      element: <CadastroProduto />,
    },
  ]);
  return (
    <div>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </div>
  );
}

export default App;
