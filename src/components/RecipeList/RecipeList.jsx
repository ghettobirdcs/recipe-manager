import React, { useEffect, useRef, useState } from "react";
import "./RecipeList.scss";

import RecipeCard from "../RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.recipes);

  const listRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      setIsOverflowing(listElement.scrollHeight > listElement.clientHeight);
    }
  }, [recipes]);

  return (
    <div className="recipe__list--wrapper">
      {isOverflowing && (
        <div className="recipe__list--fade recipe__list--fade--top" />
      )}
      <div className="recipe__list" ref={listRef}>
        <h1>Recipe Manager</h1>
        {recipes.length === 0 ? (
          <p>No recipes found. </p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
        <button className="recipe__list--button">
          <Link to="/add">Add recipe</Link>
        </button>
      </div>
      {isOverflowing && <div className="recipe__list--fade" />}
    </div>
  );
};

export default RecipeList;
