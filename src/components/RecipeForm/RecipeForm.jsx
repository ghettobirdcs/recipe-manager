import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeForm.scss";

import { addRecipe, editRecipe } from "../../features/recipes/recipesSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => recipe.id === id),
  );

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    if (!recipe) {
      dispatch(addRecipe({ id, ingredients, title, description }));
    } else {
      dispatch(
        editRecipe({ id, updates: { title, ingredients, description } }),
      );
    }
    navigate("/");
  };

  return (
    <form className="recipe__form" onSubmit={handleSubmit}>
      <div className="recipe__third">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Recipe Title"
        />
      </div>
      <div className="recipe__third">
        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          placeholder="Ingredients used for this recipe..."
        />
      </div>
      <div className="recipe__third">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Describe the recipe..."
          rows={4}
        />
      </div>
      <button type="submit">{recipe ? "Edit Recipe" : "Add Recipe"}</button>

      <Link to="/">
        <button type="button">Back to Recipe List</button>
      </Link>
    </form>
  );
};

export default RecipeForm;
