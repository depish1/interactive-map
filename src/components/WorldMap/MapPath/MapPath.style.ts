import styled from 'styled-components';

interface IPathProps {
  isSelected: boolean;
}

export const Path = styled.path<IPathProps>`
  cursor: pointer;
  transition: fill 0.1s ease-in;
  fill: ${({ theme, isSelected }) => theme.colors[isSelected ? 'white3' : 'white1']};

  &:hover {
    fill: ${({ theme, isSelected }) => !isSelected && theme.colors.white2};
  }
`;
