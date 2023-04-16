import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
