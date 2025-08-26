import React, { useState } from "react";
import MobileModal from "../UI/MobileModal";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe, onView, onEdit, onDelete, onFavorite }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="recipe__card">
      <div className="recipe__title">{recipe.title}</div>
      <p>
        Ingredients:{" "}
        <span className="recipe__ingredients">{recipe.ingredients}</span>
      </p>
      <MobileModal
        recipe={recipe}
        setIsMobileOpen={setIsMobileOpen}
        isMobileOpen={isMobileOpen}
      />
      <div className="recipe__actions">
        <button onClick={() => onView && onView(recipe)}>View</button>
        <button onClick={() => onEdit && onEdit(recipe)}>Edit</button>
        <button onClick={() => onFavorite && onFavorite(recipe)}>
          {recipe.favorite ? "Unfavorite" : "Favorite"}
        </button>
        <button onClick={() => onDelete && onDelete(recipe)}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeCard;
