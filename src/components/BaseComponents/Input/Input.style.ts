import styled from 'styled-components';

interface IStyledInputProps {
  isError?: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  background-color: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.white2)};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
  padding: 1.2rem;
  transition: border 0.1s ease-in;
  width: 100%;

  &:hover:not([readonly]) {
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.white3)};
  }

  &:focus:not([readonly]) {
    border: 1px solid ${({ isError, theme }) => theme.colors[isError ? 'error' : 'primary1']};
  }

  &[readonly] {
    border: 1px solid ${({ theme }) => theme.colors.white2};
    color: ${({ theme }) => theme.colors.black2};
    cursor: default;
  }
`;
