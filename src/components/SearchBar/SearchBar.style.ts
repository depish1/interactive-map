import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white1};
  box-shadow: ${({ theme }) => theme.boxShadows.container};
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const Form = styled.form`
  display: flex;
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
