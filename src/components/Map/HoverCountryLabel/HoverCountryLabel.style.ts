import styled from 'styled-components';

export const Wrapper = styled.span`
  backdrop-filter: blur(0.5rem);
  background: ${({ theme }) => theme.colors.primary1}bb;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadows.element};
  color: ${({ theme }) => theme.colors.white1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  left: 1rem;
  padding: 1rem;
  position: absolute;
  top: 1rem;
  z-index: ${({ theme }) => theme.zIndexes.hoverCountryLabel};
`;
