/* eslint-disable react/prop-types */
import "./ModalConfirmar.css"; // Importando o arquivo de estilo

const ModalConfirmar = ({ isOpen, message, onClose, onConfirm }) => {
  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  return (
    <div className="modal-exclusao-overlay" onClick={onClose}>
      <div
        className="modal-exclusao-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-exclusao-header">
          <h3>Aviso</h3>
        </div>
        <div className="modal-exclusao-body">
          <p>{message}</p>
        </div>
        <div className="modal-exclusao-footer">
          <button className="modal-exclusao-close-btn" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="modal-exclusao-confirm-btn"
            onClick={() => {
              onConfirm(); // Chama a função onConfirm quando o usuário confirma
              onClose(); // Fecha o modal após confirmação
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmar;
