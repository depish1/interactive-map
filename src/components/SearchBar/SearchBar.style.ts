import styled from 'styled-components';

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.white1};
  border-radius: 0.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 10rem;
  max-width: 100%;
  padding: 2rem;
  width: 60rem;
`;
