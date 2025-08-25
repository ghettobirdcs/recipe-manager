import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  selectedRecipeId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedRecipeId: (state, action) => {
      state.selectedRecipeId = action.payload;
    },
  },
});

export const { setFilter, setSelectedRecipeId } = uiSlice.actions;
export default uiSlice.reducer;
