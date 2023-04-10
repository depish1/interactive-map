import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Provider from 'Store/store';
import { GlobalStyles } from 'Styles/GlobalStyles';
import { theme } from 'Styles/themes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
