import axios from "axios";
import { useState, useEffect } from "react";

const SingleView = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);
  console.log('singleView', country)
  
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
      .then((response) => {
        setCountryWeather(response.data);
      });
  }, []);

  const render = () => {
    <h1>hi</h1>
    if (countryWeather) {
      return (
        <div>
          <h2>{country.name.common}</h2>
          <p>
            Capital: {country.capital}
            <br />
            Area: {country.area}
          </p>
          <p>
            <strong>Languages:</strong>
          </p>
          <ul>
            {Object.values(country.languages).map((language) => {
              return <li key={language}>{language}</li>;
            })}
          </ul>
          <img
            src={country.flags.svg}
            alt='country flag'
            width={500}
            height={400}
          />
          <h2>Weather in {country.capital}</h2>
          Current temperature: {countryWeather.main.temp.toFixed(0)} &deg;F
          <br />
          {console.log('icon', countryWeather.weather[0].icon)}
          <img
            alt='weather icon'
            src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@4x.png`}
          />
          <br />
          Wind speed: {countryWeather.wind.speed} mph
        </div>
      );
    }
  };

  return <div>{render()}</div>
};

export default SingleView;