import styled, { css } from 'styled-components';

interface ISideBarProps {
  isOpen: boolean;
}

const scrollbarCSS = css`
  overflow-y: auto;
  overflow-x: visible;
  scrollbar-gutter: stable;
  /* width */
  ::-webkit-scrollbar {
    width: 1.2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #${({ theme }) => theme.colors.white1};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.black4};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.black3};
  }
`;

export const Wrapper = styled.aside<ISideBarProps>`
  background: ${({ theme }) => theme.colors.white1};
  border-right: ${({ theme }) => theme.colors.black4} 1px solid;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  max-width: 100%;
  padding: 2rem;
  position: relative;
  transition: transform 0.2s ease-in-out;
  width: 40rem;
  z-index: ${({ theme }) => theme.zIndexes.sideBar};

  ${scrollbarCSS}

  @media (max-width: 1000px) {
    position: absolute;
    transform: ${({ isOpen }) => !isOpen && `translateX(-100%)`};
  }
`;

export const Headline = styled.h2`
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  margin: 0;
  text-align: center;
  width: 100%;
`;

export const OpenButton = styled.button<ISideBarProps>`
  background: transparent;
  border: none;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 20px solid ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
  display: none;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${({ theme }) => theme.zIndexes.openSideBarButton};

  @media (max-width: 1000px) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }
`;

export const CloseButton = styled.button<ISideBarProps>`
  background: ${({ theme }) => theme.colors.white1};
  border: none;
  border-radius: 0.5rem;
  display: none;
  padding: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.white2};
  }

  @media (max-width: 1000px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;
