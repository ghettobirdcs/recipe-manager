import React, { useEffect, useRef, useState } from "react";
import "./RecipeList.scss";

import RecipeCard from "../RecipeCard/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RecipeModal from "../RecipeModal/RecipeModal";
import { deleteRecipe } from "../../features/recipes/recipesSlice";
import { setSelectedRecipeId } from "../../features/ui/uiSlice";
import { v4 as uuidv4 } from "uuid";

const RecipeList = () => {
  // Get recipes from Redux state manager
  const recipes = useSelector((state) => state.recipes.recipes);

  // Assign selected recipe + id using Redux state management
  const selectedRecipeId = useSelector((state) => state.ui.selectedRecipeId);
  const selectedRecipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => recipe.id === selectedRecipeId),
  );

  // References
  const listRef = useRef(null);

  // Hooks
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Fundamental
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fade out overflowing content in the recipe list
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      setIsOverflowing(listElement.scrollHeight > listElement.clientHeight);
    }
  }, [recipes]);

  useEffect(() => {
    // Clean up selected recipe id when the modal closes
    if (modalOpen === false) {
      dispatch(setSelectedRecipeId(null));
    }
  }, [modalOpen]);

  const handleView = (id) => {
    dispatch(setSelectedRecipeId(id));
    setModalOpen(true);
  };

  const handleEdit = (id) => {
    dispatch(setSelectedRecipeId(id));
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };

  return (
    <>
      <RecipeModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedRecipe && (
          <>
            <h2>{selectedRecipe.title}</h2>
            <p>
              Ingredients:{" "}
              <span className="recipe__ingredients">
                {selectedRecipe.ingredients}
              </span>
            </p>
            <p>{selectedRecipe.description}</p>
          </>
        )}
      </RecipeModal>
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
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onView={() => handleView(recipe.id)}
                onEdit={() => handleEdit(recipe.id)}
                onDelete={() => handleDelete(recipe.id)}
              />
            ))
          )}
          <Link to={`/edit/${uuidv4()}`}>
            <button className="recipe__list--button">Add recipe</button>
          </Link>
        </div>
        {isOverflowing && <div className="recipe__list--fade" />}
      </div>
    </>
  );
};

export default RecipeList;
