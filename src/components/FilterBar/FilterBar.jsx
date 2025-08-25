import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterSearch,
  setFilterFavorites,
  setFilterSort,
} from "../../features/ui/uiSlice";
import "./FilterBar.scss";

const FilterBar = () => {
  const filter = useSelector((state) => state.ui.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter__bar">
      <div className="filter__bar--left">
        {/* Search by title */}
        <input
          name="search"
          type="text"
          placeholder="Search by title..."
          value={filter.search}
          onChange={(event) => dispatch(setFilterSearch(event.target.value))}
        />

        {/* Sort order dropdown */}
        <select
          name="sort"
          value={filter.sort}
          onChange={(event) => dispatch(setFilterSort(event.target.value))}
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* Favorites only toggle */}
      <label className="filter__bar--checkbox">
        <input
          name="favorite"
          type="checkbox"
          checked={filter.favoritesOnly}
          onChange={(event) =>
            dispatch(setFilterFavorites(event.target.checked))
          }
        />
        Favorites only
      </label>
    </div>
  );
};

export default FilterBar;
