import styled, { keyframes } from 'styled-components';

interface IDotProps {
  delay: number;
}

const dotPulse = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Dot = styled.span<IDotProps>`
  display: inline-block;
  margin: 0 4px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${dotPulse} 1s linear infinite;
  animation-delay: ${({ delay = 0 }) => delay}ms;
  background-color: ${({ theme }) => theme.colors.primary1};
`;
