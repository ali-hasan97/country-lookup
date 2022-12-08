import './countryList.css'
const CountryList = ({
  name,
  country,
  setCountryClicked,
  setSelectedCountry,
}) => {
  return (
    <tr>
      <td>
        <button
          id={name}
          key={name}
          country={country}
          onClick={() => {
              setCountryClicked(true)
              setSelectedCountry({name})
          }}
        >
          {name}
        </button>
      </td>
    </tr>

  );
};

export default CountryList;
