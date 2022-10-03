import axios from "axios";
import { useState, useEffect } from "react";
import './singleView.css'

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
        <div className="singleView">
          <h2>{country.name.common}</h2>
          <div className="singleView__container">
            <div className="singleView__container--info">
              <h2>General Information</h2>
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
            </div>
            <div className="singleView__container--main">
              <img
                    src={country.flags.svg}
                    alt='country flag'
              />
            </div>
            <div className="singleView__container--weather">
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
          </div>
        </div>
      );
    }
  };

  return <div>{render()}</div>
};

export default SingleView;