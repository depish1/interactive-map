import { MouseEventHandler } from 'react';
import { useTheme } from 'styled-components';

import { StyledButton } from './Button.style';

interface IButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: 'button' | 'submit';
}

const Button = ({ fullWidth = true, onClick, text, type = 'button', disabled }: IButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton disabled={disabled} fullWidth={fullWidth} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
