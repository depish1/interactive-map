import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    background-color: transparent;
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
 
  body {
    background: ${({ theme }) => theme.colors.white1};
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    user-select: none;
  }

  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
