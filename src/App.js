import axios from "axios";
import { useState, useEffect } from "react";
import Search from "./components/Search";

function App() {
  const [countries, setCountries] = useState([]);

  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);

  return (
    <div>
      <Search countries={countries} />
    </div>
  );
}

export default App;
