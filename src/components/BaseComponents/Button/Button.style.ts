import styled, { DefaultTheme, FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { ButtonVariantType } from './Button.type';

interface IStyledButtonProps {
  fullWidth: boolean;
  isLinkButton: boolean;
  variant: ButtonVariantType;
}

const buttonColorsMap: Record<ButtonVariantType, FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary1};

    &:hover:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.primary2};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger1};

    &:hover:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.danger2};
    }
  `,
};

const linkButtonStyles = css`
  color: ${({ theme }) => theme.colors.black1};
  background: transparent;
  box-shadow: none;
  padding: 0.5rem 2rem;
  text-decoration: underline;

  &:hover:not([disabled]) {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black3};
  }

  &:disabled {
    background-color: transparent;
    cursor: default;
  }
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  align-items: center;
  border: none;
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
  ${({ variant }) => buttonColorsMap[variant]}
  ${({ isLinkButton }) => isLinkButton && linkButtonStyles}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black3};
    cursor: default;
  }
`;
