import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Container, Error } from './SingleCountry.style';
import { getCountry } from 'Api/country';
import Loader from 'Components/BaseComponents/Loader/Loader';
import CountryElement from './CountryElement';

interface ISingleCountryProps {
  code: string;
}

const SingleCountry = ({ code }: ISingleCountryProps) => {
  const { data, isFetching, isLoading, isError } = useQuery([code, code], getCountry, { initialData: null });
  const showLoader = !data && (isFetching || isLoading);

  useEffect(() => console.log('DATA', data), [data]);

  return (
    <Container>
      {showLoader && <Loader />}
      {data && <CountryElement data={data} />}
      {isError && <Error>Something went wrong. Country code: {code}</Error>}
    </Container>
  );
};

export default SingleCountry;
