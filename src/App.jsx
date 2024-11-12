import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";

function App() {
  const router = createBrowserRouter([{ path: "" }]);
  return (
    <>
      <Cabecalho />
    </>
  );
}

export default App;
