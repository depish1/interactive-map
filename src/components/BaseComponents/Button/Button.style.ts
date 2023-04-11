import styled, { DefaultTheme, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps, css } from 'styled-components';
import { ButtonVariantType } from './Button.type';

interface IStyledButtonProps {
  fullWidth: boolean;
  variant: ButtonVariantType;
}

const getColorForButton: Record<ButtonVariantType, FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary1};
    border: 0.3rem solid ${({ theme }) => theme.colors.primary1};

    &:hover:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.primary2};
      border-color: ${({ theme }) => theme.colors.primary2};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger1};
    border: 0.3rem solid ${({ theme }) => theme.colors.danger1};

    &:hover:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.danger2};
      border-color: ${({ theme }) => theme.colors.danger2};
    }
  `,
};

export const StyledButton = styled.button<IStyledButtonProps>`
  align-items: center;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadows.element};
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
  ${({ variant }) => getColorForButton[variant]}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black3};
    border-color: ${({ theme }) => theme.colors.black3};
    cursor: default;
  }
`;
