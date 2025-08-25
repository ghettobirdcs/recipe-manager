import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipes/recipesSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    ui: uiReducer,
  },
});
