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
        <h3>Contato</h3>
        <p>
          <MdLocalPhone />
          (48) 9999-9999
        </p>
        <p>
          <MdWhatsapp />
          (48) 9999-9999
        </p>
        <p>
          <MdEmail />
          ciadomelsenai@gmail.com
        </p>
      </div>
      <div>
        <div>
          <MdFacebook />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};
export default Rodape;
