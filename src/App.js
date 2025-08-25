import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

import { RecipeForm, RecipeList } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/edit/:id" element={<RecipeForm />} />
    </Routes>
  );
}

export default App;
