import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Principal from "./Paginas/Principal/Principal";
import Rodape from "./Componentes/Rodape/Rodape";
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";
import LoginUsuario from "./Paginas/LoginUsuario/LoginUsuario";
import CatalogoProdutos from "./Paginas/CatalogoProdutos/CatalogoProdutos";
import ProdutoDetalhes from "./Paginas/ProdutoDetalhes/ProdutoDetalhes";
import CadastroProduto from "./Paginas/CadastroProduto/CadastroProduto";
import { AppProvider } from "./Componentes/AppContext/AppContext";
import VerificadorAdmin from "./Componentes/VerificadorAdmin/VerificadorAdmin";
import { CarrinhoProvider } from "./Componentes/CarrinhoContext/CarrinhoContext";

function Layout() {
  return (
    <div>
      <AppProvider>
        <CarrinhoProvider>
          <Cabecalho />
          <Outlet />
          <Rodape />
        </CarrinhoProvider>
      </AppProvider>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
          path: "produto-detalhes/:id",
          element: <ProdutoDetalhes />,
        },

        {
          path: "cadastro-produto",
          element: (
            <VerificadorAdmin>
              <CadastroProduto />
            </VerificadorAdmin>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
