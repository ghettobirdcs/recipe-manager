import React from "react";
import "./MobileModal.scss";
import { Link } from "react-router-dom";

const MobileModal = ({ recipe, isMobileOpen, setIsMobileOpen }) => {
  return (
    <div
      className="mobile-modal"
      onClick={() => setIsMobileOpen(!isMobileOpen)}
    >
      <img src="/menu-lines.svg" alt="" />
      <div className={`mobile-buttons ${isMobileOpen ? "mobile-open" : ""}`}>
        <button type="submit">{recipe ? "Save" : "Create"}</button>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default MobileModal;
