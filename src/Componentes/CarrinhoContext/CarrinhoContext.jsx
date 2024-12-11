import { createContext, useState, useEffect } from "react";

const CarrinhoContext = createContext();

// eslint-disable-next-line react/prop-types
const CarrinhoProvider = ({ children }) => {
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoData = JSON.parse(localStorage.getItem("carrinho")) || [];
    setProdutosNoCarrinho(carrinhoData);
  }, []);

  const atualizarCarrinho = (produtos) => {
    setProdutosNoCarrinho(produtos);
    localStorage.setItem("carrinho", JSON.stringify(produtos));
  };

  return (
    <CarrinhoContext.Provider value={{ produtosNoCarrinho, atualizarCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export { CarrinhoContext, CarrinhoProvider };
