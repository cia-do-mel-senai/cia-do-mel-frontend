import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Principal from "./Componentes/Principal/Principal";
import Rodape from "./Componentes/Rodape/Rodape";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Principal /> }]);
  return (
    <div>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </div>
  );
}

export default App;
