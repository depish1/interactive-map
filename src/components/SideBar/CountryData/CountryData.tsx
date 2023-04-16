import { ICountry, ICurrency } from 'Api/country';
import { Wrapper } from './CountryData.style';
import SingleDataRecord from 'Components/SideBar/SingleDataRecord/SingleDataRecord';

interface ICountryDataProps {
  data: ICountry;
}

const getCurrenciesString = (currencies: Record<string, ICurrency>) => {
  const currenciesStrings = Object.keys(currencies).map((key) => `${currencies[key].name} (${currencies[key].symbol})`);
  return currenciesStrings.join(', ');
};

const CountryData = ({ data }: ICountryDataProps) => (
  <Wrapper>
    <SingleDataRecord label="Official name" value={data.name.official} />
    <SingleDataRecord label="Population" value={data.population.toLocaleString('en')} />
    <SingleDataRecord label="Area" value={`${data.area.toLocaleString('en')} \u{33A1}`} />
    <SingleDataRecord label="Region" value={data.region} />
    <SingleDataRecord label="Subregion" value={data.subregion} />
    <SingleDataRecord label="Capital" value={data.capital} />
    <SingleDataRecord label="Currencies" value={getCurrenciesString(data.currencies)} />
    <SingleDataRecord label="Borders" value={data.borders.join(', ')} />
  </Wrapper>
);

export default CountryData;
