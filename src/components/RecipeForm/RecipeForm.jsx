import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeForm.scss";

import { addRecipe, editRecipe } from "../../features/recipes/recipesSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeThird from "../UI/RecipeThird";
import MobileModal from "../UI/MobileModal";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      <RecipeThird type="title" value={title} setValue={setTitle} />
      <RecipeThird
        type="ingredients"
        value={ingredients}
        setValue={setIngredients}
      />
      <RecipeThird
        type="description"
        value={description}
        setValue={setDescription}
      />

      {/* FORM BUTTONS */}
      <button type="submit">{recipe ? "Edit Recipe" : "Add Recipe"}</button>
      <Link to="/">
        <button type="button">Back to List</button>
      </Link>

      {/* MOBILE MODAL FOR BUTTONS */}
      <MobileModal
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        recipe={recipe}
      />
    </form>
  );
};

export default RecipeForm;
