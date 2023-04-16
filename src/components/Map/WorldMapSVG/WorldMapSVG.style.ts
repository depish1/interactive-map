import styled from 'styled-components';

export const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white1};
  border: ${({ theme }) => theme.colors.black4} 1px solid;
  box-shadow: ${({ theme }) => theme.boxShadows.container};
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
