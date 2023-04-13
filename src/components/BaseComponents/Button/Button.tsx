import { MouseEventHandler } from 'react';

import { ButtonVariantType } from './Button.type';
import { StyledButton } from './Button.style';

interface IButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  isLinkButton?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: 'button' | 'submit';
  variant?: ButtonVariantType;
}

const Button = ({ fullWidth = true, onClick, text, type = 'button', disabled, variant = 'default', isLinkButton = false }: IButtonProps) => (
  <StyledButton disabled={disabled} fullWidth={fullWidth} isLinkButton={isLinkButton} onClick={onClick} type={type} variant={variant}>
    {text}
  </StyledButton>
);

export default Button;
