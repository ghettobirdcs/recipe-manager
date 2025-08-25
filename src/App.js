import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

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
