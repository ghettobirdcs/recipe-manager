import React from "react";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe__card">
      <div className="recipe__title">{recipe.title}</div>
      <div>{recipe.description}</div>
      <div className="recipe__actions">
        {/* <button onClick={() => onView && onView(recipe)}>View</button> */}
        {/* <button onClick={() => onEdit && onEdit(recipe)}>Edit</button> */}
        {/* <button onClick={() => onDelete && onDelete(recipe)}>Delete</button> */}
      </div>
    </div>
  );
};

export default RecipeCard;
