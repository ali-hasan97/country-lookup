import React from "react";
import { useState } from "react";
import './search.css'
import './countryList.css'
import DisplayMethod from './DisplayMethod'

const Search = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [countryClicked, setCountryClicked] = useState(false);
  const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(search));

  return (
    <div className="search">
      <div className="search__search-bar">
        Search:
        <input
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
            setCountryClicked(false)
          }}
          value={search}
        />
      </div>
      <h1 className="search__text">Search a Country</h1>
      <DisplayMethod filtered={filtered} search={search} setSearch={setSearch} countryClicked={countryClicked} setCountryClicked={setCountryClicked} />
    </div>
  );
};

export default Search;
