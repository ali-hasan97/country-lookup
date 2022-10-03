import './countryList.css'

const CountryList = ({
  name,
  setSearch,
  country,
}) => {

  return (
    <tr>
      <td>
        <button
          id={name}
          key={name}
          country={country}
          onClick={() => {setSearch(country.name.common.toLowerCase())}}
        >
          {name}
        </button>
      </td>
    </tr>
  );
};

export default CountryList;
