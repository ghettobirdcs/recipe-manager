import React from "react";

const RecipeThird = ({ type, value, setValue }) => {
  return (
    <div className="recipe__third">
      <label
        htmlFor={
          type === "title"
            ? "title"
            : type === "ingredients"
              ? "ingredients"
              : "description"
        }
      >
        {type === "title"
          ? "Title"
          : type === "ingredients"
            ? "Ingredients"
            : "Description"}
      </label>
      {type !== "description" ? (
        <input
          id={
            type === "title"
              ? "title"
              : type === "ingredients"
                ? "ingredients"
                : "description"
          }
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          placeholder={`Recipe ${type === "title" ? "title" : type === "ingredients" ? "ingredients" : "description"}`}
        />
      ) : (
        <textarea
          id="description"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          placeholder="Describe the recipe..."
          rows={4}
        />
      )}
    </div>
  );
};

export default RecipeThird;
