import { Form } from './SearchBar.style';
import { useSearchBar } from './useSearchBar';
import Button from 'Components/BaseComponents/Button/Button';
import Input from 'Components/BaseComponents/Input/Input';

const SearchBar = () => {
  const { inputValue, inputChangeHandler, selectCountriesByFilter } = useSearchBar();

  return (
    <Form onSubmit={selectCountriesByFilter}>
      <Input name="filter" onChange={inputChangeHandler} value={inputValue} />
      <Button text="Search" type="submit" />
    </Form>
  );
};

export default SearchBar;
