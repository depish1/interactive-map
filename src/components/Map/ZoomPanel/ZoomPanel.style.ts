import styled from 'styled-components';

export const Wrapper = styled.div`
  backdrop-filter: blur(0.5rem);
  background: ${({ theme }) => theme.colors.white1}bb;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: ${({ theme }) => theme.zIndexes.zoomPanel};
`;

export const InfoElement = styled.span`
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
`;
