import { ChangeEvent, InputHTMLAttributes, MouseEvent, Ref, forwardRef } from 'react';

import { StyledInput } from './Input.style';

export type InputPropsType = {
  isError?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onClick'>;

const Input = forwardRef((props: InputPropsType, ref: Ref<HTMLInputElement>) => {
  props.maxLength;
  return <StyledInput ref={ref} {...props}></StyledInput>;
});

export default Input;
