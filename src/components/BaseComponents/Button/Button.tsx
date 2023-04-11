import { MouseEventHandler } from 'react';
import { useTheme } from 'styled-components';

import { ButtonVariantType } from './Button.type';
import { StyledButton } from './Button.style';

interface IButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: 'button' | 'submit';
  variant?: ButtonVariantType;
}

const Button = ({ fullWidth = true, onClick, text, type = 'button', disabled, variant = 'default' }: IButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton disabled={disabled} fullWidth={fullWidth} onClick={onClick} type={type} variant={variant}>
      {text}
    </StyledButton>
  );
};

export default Button;
