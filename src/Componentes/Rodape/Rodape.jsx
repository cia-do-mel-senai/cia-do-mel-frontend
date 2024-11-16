import { MdLocalPhone } from "react-icons/md";
import "./Rodape.css";
import { MdWhatsapp } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="rodape-contato">
        <h3 style={{ fontSize: "0.8rem" }}>Contato</h3>
        <div>
          <MdLocalPhone size={10} color="grey" />
          <p>(48) 9999-9999</p>
        </div>
        <div>
          <MdWhatsapp size={10} color="rgb(30, 255, 30)" />
          <p>(48) 9999-9999</p>
        </div>
        <div>
          <MdEmail size={10} color="#50b3ff" />
          <p>ciadomelsenai@gmail.com</p>
        </div>
      </div>
      <div className="rodape-fundo">
        <div>
          <MdFacebook size={10} color="#678dff" />
          <FaYoutube size={10} color="red" />
          <FaInstagram size={10} color="#ff67d6" />
        </div>
        <p>
          Copyright©{new Date().getFullYear()}-Todos os direitos reservados-Cia
          do Mel
        </p>
      </div>
    </footer>
  );
};
export default Rodape;
