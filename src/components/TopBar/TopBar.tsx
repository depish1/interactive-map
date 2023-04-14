import { ButtonsWrapper, Container, Form } from './TopBar.style';
import { useSearchBar } from './useSearchBar';
import Button from 'Components/BaseComponents/Button/Button';
import Input from 'Components/BaseComponents/Input/Input';

const TopBar = () => {
  const { inputValue, inputChangeHandler, selectCountriesByFilter, clearSelectedCountries } = useSearchBar();

  return (
    <Container>
      <Form onSubmit={selectCountriesByFilter}>
        <Input name="filter" onChange={inputChangeHandler} value={inputValue} />
        <ButtonsWrapper>
          <Button text="Search" type="submit" />
          <Button onClick={clearSelectedCountries} text="Clear" type="button" variant="danger" />
        </ButtonsWrapper>
      </Form>
    </Container>
  );
};

export default TopBar;
