import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    search: "",
    favoritesOnly: false,
    sort: "asc",
  },
  selectedRecipeId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFilterSearch: (state, action) => {
      state.filter.search = action.payload;
    },
    setFilterFavorites: (state, action) => {
      state.filter.favoritesOnly = action.payload;
    },
    setFilterSort: (state, action) => {
      state.filter.sort = action.payload;
    },
    setSelectedRecipeId: (state, action) => {
      state.selectedRecipeId = action.payload;
    },
  },
});

export const {
  setFilterSearch,
  setFilterSort,
  setFilterFavorites,
  setSelectedRecipeId,
} = uiSlice.actions;
export default uiSlice.reducer;
