import styled from 'styled-components';

interface IPathProps {
  isSelected: boolean;
}

export const Path = styled.path<IPathProps>`
  cursor: pointer;
  transition: fill 0.1s ease-in;
  fill: ${({ theme, isSelected }) => theme.colors[isSelected ? 'primary3' : 'black1']};

  &:hover {
    fill: ${({ theme, isSelected }) => !isSelected && theme.colors.black2};
  }
`;
