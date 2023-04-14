import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100%;
  justify-items: center;
  overflow: hidden;
  width: 100%;
`;
export const MapWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white2};
  height: 100%;
  justify-items: center;
  overflow: hidden;
  padding: 2rem;
  width: 100%;
`;
