import { Wrapper } from './CountriesList.style';
import { useStore } from 'Store/store';
import SingleCountry from 'Components/SideBar/SingleCountry/SingleCountry';

const CountriesList = () => {
  const [selectedCountries] = useStore((store) => store.selectedCountries);

  return (
    <Wrapper>
      {selectedCountries.map((code) => (
        <SingleCountry key={code} code={code} />
      ))}
    </Wrapper>
  );
};

export default CountriesList;
