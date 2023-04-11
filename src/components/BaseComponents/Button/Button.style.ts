import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  fullWidth: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary1};
  border: 0.3rem solid ${({ theme }) => theme.colors.primary1};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  justify-content: center;
  line-height: 2rem;
  padding: 1rem 2rem;
  transition: 0.1s all ease-in;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white3};
    border-color: ${({ theme }) => theme.colors.white3};
    color: ${({ theme }) => theme.colors.white1};
    cursor: default;
  }

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.primary2};
    border-color: ${({ theme }) => theme.colors.primary2};
    color: ${({ theme }) => theme.colors.white1};
  }
`;
