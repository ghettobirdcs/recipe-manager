import React from "react";
import "./RecipeList.scss";

import RecipeCard from "../RecipeCard/RecipeCard";
import { useSelector } from "react-redux";

const RecipeList = () => {
  // Get recipes array from Redux
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <div>
      <div className="recipe__list">
        <h1>Recipe Manager</h1>
        {recipes.length === 0 ? (
          <p>No recipes found. Add one!</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
