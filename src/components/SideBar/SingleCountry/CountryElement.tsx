import { ICountry } from 'Api/country';
import { CountryName, Flag, Wrapper } from './SingleCountry.style';
import { useState } from 'react';
import ChevronIcon from '@/icons/ChevronIcon';

interface ICountryElementProps {
  data: ICountry;
}

const CountryElement = ({ data }: ICountryElementProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log('DATA', data);

  return (
    <Wrapper>
      <Flag alt={data.flags.alt} src={data.flags.png} />
      <CountryName>{data?.name.common}</CountryName>
      <ChevronIcon />
    </Wrapper>
  );
};

export default CountryElement;
