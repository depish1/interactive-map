import styled from 'styled-components';

import Input from 'Components/BaseComponents/Input/Input';

export const StyledInput = styled(Input)``;

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.white1};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadows.container};
  display: flex;
  gap: 1rem;
  max-width: 100%;
  padding: 2rem;

  ${StyledInput} {
    min-width: 20rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
