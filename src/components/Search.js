import React from "react";

function Search({handleSearch}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default Search;