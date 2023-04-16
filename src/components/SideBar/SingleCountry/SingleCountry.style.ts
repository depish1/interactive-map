import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white2};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadows.container};
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  width: 100%;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.danger1};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-weight: 600;
  width: 100%;
`;
