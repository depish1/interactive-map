import { MouseEventHandler } from 'react';

import { ICountry } from 'Api/country';
import { CountryName, Flag, Wrapper } from './CountryButton.style';
import ChevronIcon from 'Icons/ChevronIcon';

interface ICountryElementProps {
  data: ICountry;
  isExpanded: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CountryButton = ({ data, isExpanded, onClick }: ICountryElementProps) => (
  <Wrapper isExpanded={isExpanded} onClick={onClick}>
    <Flag alt={data.flags.alt} src={data.flags.png} />
    <CountryName>{data?.name.common}</CountryName>
    <ChevronIcon />
  </Wrapper>
);

export default CountryButton;
