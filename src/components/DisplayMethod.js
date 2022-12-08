import CountryList from './CountryList'
import SingleView from './SingleView'
import { useState } from 'react'

const DisplayMethod = ({ filtered, search, setSearch, countryClicked, setCountryClicked }) => {
  const [selectedCountry, setSelectedCountry] = useState("")

  if (countryClicked === true) {
    filtered = filtered.filter(country => country.name.common.toLowerCase() === selectedCountry.name.toLowerCase())
    return <SingleView country={filtered[0]} />
  } else if (filtered.length === 1) {
    return <SingleView country={filtered[0]} />
  } else if (filtered.length < 20 && filtered.length > 1) {
    return (
      <table className="countryList">
      <tbody>
        {filtered.slice(0, 20).map((country) => {
        return (
        <CountryList 
        name={country.name.common}
        country={country}
        key={country.name.common}
        setCountryClicked={setCountryClicked}
        setSelectedCountry={setSelectedCountry}
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

export default DisplayMethod