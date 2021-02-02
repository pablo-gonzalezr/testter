import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <input
        value={searchValue}
        placeholder={"Buscar Pelicula"}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button onClick={() => onSearch(searchValue)}>Buscar</button>
    </>
  );
};

export default SearchBar;
