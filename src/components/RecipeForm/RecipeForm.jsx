import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./RecipeForm.scss";

import { addRecipe } from "../../features/recipes/recipesSlice";
import { Link } from "react-router-dom";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    dispatch(addRecipe({ id: Date.now(), title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <form className="recipe__form" onSubmit={handleSubmit}>
      <div className="recipe__half">
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
      <div className="recipe__half">
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
      <button type="submit">Add Recipe</button>
      <button type="button">
        <Link to="/">Back to Recipe List</Link>
      </button>
    </form>
  );
};

export default RecipeForm;
