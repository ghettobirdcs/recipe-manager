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
    // TODO: Add edit/delete/favorite actions
  },
});

export const { addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
