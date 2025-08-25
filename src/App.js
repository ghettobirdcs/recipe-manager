import { Route, Routes } from "react-router-dom";
import "./App.css";

import { RecipeDetail, RecipeForm, RecipeList } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<RecipeForm />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;
