import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import CountryList from "../CountryList/CountryList";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [countryList, setCountryList] = useState([]);

  const fetchData = async () => {
    return await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4b4ab6ac`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryList(data.Search);
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
      <CountryList countryList={countryList} />
    </>
  );
};

export default SearchPage;
