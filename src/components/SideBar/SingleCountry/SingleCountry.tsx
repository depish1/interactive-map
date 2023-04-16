import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import { Container, Error } from './SingleCountry.style';
import { getCountry } from 'Api/country';
import CountryButton from 'Components/SideBar/CountryButton/CountryButton';
import CountryData from 'Components/SideBar/CountryData/CountryData';
import Loader from 'Components/BaseComponents/Loader/Loader';

interface ISingleCountryProps {
  code: string;
}

const SingleCountry = ({ code }: ISingleCountryProps) => {
  const { data, isFetching, isLoading, isError } = useQuery([code, code], getCountry, { initialData: null });
  const [isExpanded, setIsExpanded] = useState(false);
  const showLoader = !data && (isFetching || isLoading);

  const toggleData = useCallback(() => setIsExpanded((prev) => !prev), []);

  return (
    <Container>
      {showLoader && <Loader />}
      {data && <CountryButton data={data} isExpanded={isExpanded} onClick={toggleData} />}
      {isError && <Error>Something went wrong. Country code: {code}</Error>}
      {isExpanded && <CountryData data={data} />}
    </Container>
  );
};

export default SingleCountry;
