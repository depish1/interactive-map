import { ButtonsWrapper, Form } from './SearchBar.style';
import { useSearchBar } from './useSearchBar';
import Button from 'Components/BaseComponents/Button/Button';
import Input from 'Components/BaseComponents/Input/Input';

const SearchBar = () => {
  const { inputValue, inputChangeHandler, selectCountriesByFilter, clearSelectedCountries } = useSearchBar();

  return (
    <Form onSubmit={selectCountriesByFilter}>
      <Input name="filter" onChange={inputChangeHandler} value={inputValue} />
      <ButtonsWrapper>
        <Button text="Search" type="submit" />
        <Button onClick={clearSelectedCountries} text="Clear" type="button" variant="danger" />
      </ButtonsWrapper>
    </Form>
  );
};

export default SearchBar;
