/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);

  const atualizarUsuarioEstaLogado = (usuario) => {
    setUsuarioEstaLogado(usuario);
  };

  return (
    <AppContext.Provider
      value={{ usuarioEstaLogado, atualizarUsuarioEstaLogado }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
