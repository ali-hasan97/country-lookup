const CountryList = ({
  name,
  setSearch,
  country,
}) => {

  return (
    <tr>
      <td>{name}</td>
      <td>
        <button
          id={name}
          key={name}
          country={country}
          onClick={() => {setSearch(country.name.common.toLowerCase())}}
        >
          show
        </button>
      </td>
    </tr>
  );
};

export default CountryList;
