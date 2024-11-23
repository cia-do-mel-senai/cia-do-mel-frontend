import "./ProdutoCatalogo.css";

const ProdutoCatalogo = ({ imagem, nome, preco }) => {
  return (
    <div className="produto-catalogo-container">
      <img src={imagem} />
      <p>
        <b>
          {nome} <br />
          R${preco}
        </b>
      </p>
      <button>Comprar</button>
    </div>
  );
};

export default ProdutoCatalogo;
