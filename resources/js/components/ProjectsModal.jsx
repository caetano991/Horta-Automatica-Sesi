import './ProjectsModal.css';

export function ProjectsModal({ isOpen, onClose, title, modalDescription, modalImage }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2>{title}</h2>

        {modalImage && (
          <img
            src={modalImage}
            alt={title}
            className="modal-image"
          />
        )}

        <p>{modalDescription}</p>
      </div>
    </div>
  );
}