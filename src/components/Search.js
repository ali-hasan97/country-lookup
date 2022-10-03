import React from "react";
import { useState, useEffect } from "react";
import './search.css'
import './countryList.css'
import SingleView from "./SingleView";
import CountryList from "./CountryList";

const Search = ({ countries }) => {
  const [search, setSearch] = useState("");
  const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(search));

  return (
    <div className="search">
      <div className="search__search-bar">
        Search:
        <input
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
          }}
          value={search}
        />
      </div>
      <h1 className="search__text">Search a Country</h1>
      <DisplayMethod filtered={filtered} search={search} setSearch={setSearch} />
    </div>
  );
};

const DisplayMethod = ({ filtered, search, setSearch }) => {
  if (filtered.length === 1) {
    return <SingleView country={filtered[0]} />
  } else if (filtered.length < 20 && filtered.length > 1) {
    return (
      <table className="countryList">
      <tbody>
        {filtered.slice(0, 20).map((country) => {
        return (
        <CountryList 
        name={country.name.common}
        setSearch={setSearch}
        country={country}
        key={country.name.common}
        />)
        })}
      </tbody>
      </table>
    );
  } else if (filtered.length === 0) {
    return <h2 className="search__text">No matches found...</h2>
  } else {
    return <h2 className="search__text">Be specific!</h2>;
  }
};

export default Search;
