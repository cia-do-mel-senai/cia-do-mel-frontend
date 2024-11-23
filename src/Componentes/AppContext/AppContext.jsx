/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  const atualizarUsuarioLogado = (usuario) => {
    setUsuarioLogado(usuario);
  };

  return (
    <AppContext.Provider value={{ usuarioLogado, atualizarUsuarioLogado }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
