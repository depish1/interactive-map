import styled from 'styled-components';

interface IWrapperProps {
  isExpanded: boolean;
}

export const Wrapper = styled.button<IWrapperProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.white1};
  border: solid 1px ${({ theme }) => theme.colors.black4};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1rem;
  height: 8rem;
  padding: 2rem;
  width: 100%;

  &:hover,
  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.primary1};
    box-shadow: ${({ theme }) => theme.boxShadows.container};
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.primary1};
    }
  }

  svg {
    transform: rotate(${({ isExpanded }) => (isExpanded ? '270deg' : '90deg')});
  }
`;

export const CountryName = styled.span`
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
`;

export const Flag = styled.img`
  max-width: 4rem;
`;
