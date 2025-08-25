import React from "react";
import "./RecipeModal.scss";

const RecipeModal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`recipe__modal--overlay ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
    >
      <div className={`recipe__modal--content ${isOpen ? "open" : ""}`}>
        <button
          className="btn--close"
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default RecipeModal;
