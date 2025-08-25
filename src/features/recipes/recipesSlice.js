import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    deleteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload,
      );
    },
    editRecipe: (state, action) => {
      const { id, updates } = action.payload;
      const recipe = state.recipes.find((recipe) => recipe.id === id);
      if (recipe) {
        Object.assign(recipe, updates);
      }
    },
    favoriteRecipe: (state, action) => {
      const id = action.payload;
      const recipe = state.recipes.find((recipe) => recipe.id === id);
      if (recipe) {
        recipe.favorite = !recipe.favorite;
      }
    },
  },
});

export const { addRecipe, deleteRecipe, editRecipe, favoriteRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
