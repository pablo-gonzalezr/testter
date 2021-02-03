import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
//import Favourites from "../Favourites/Favourites";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);

  const fetchData = async () => {
    return await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4b4ab6ac`)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.Search);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);

  return (
    <>
      <h1>Lista de Peliculas</h1>
      <SearchBar onSearch={setSearch} />
      <MovieList movieList={movieList} />
    </>
  );
};

export default SearchPage;
