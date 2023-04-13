import styled from 'styled-components';

export const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white2};
  border: ${({ theme }) => theme.colors.black1} 2px solid;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
