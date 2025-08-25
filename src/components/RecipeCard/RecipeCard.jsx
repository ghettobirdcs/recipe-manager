import React from "react";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe, onView, onEdit, onDelete, onFavorite }) => {
  return (
    <div className="recipe__card">
      <div className="recipe__title">{recipe.title}</div>
      <p>
        Ingredients:{" "}
        <span className="recipe__ingredients">{recipe.ingredients}</span>
      </p>
      {/* TODO: Implement custom dropdown for mobile */}
      <div className="recipe__actions--modal">
        <button>
          <img src="/menu-lines.svg" alt="Recipe action button" />
        </button>
      </div>
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
