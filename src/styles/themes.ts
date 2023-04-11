/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { ITheme } from 'Types/ThemeTypes';

export const theme: ITheme = {
  colors: {
    white1: '#ffffff',
    white2: '#f8f9fa',
    primary1: '#004e89',
    primary2: '#407ba7',
    primary3: '#002962',
    black1: '#242423',
    black2: '#333533',
    black3: '#495057',
    danger1: '#c00021',
    danger2: '#ff002b',
  },
  fontSizes: {
    xSmall: '12px',
    small: '16px',
    medium: '20px',
    large: '24px',
    xLarge: '28px',
  },
  boxShadows: {
    container: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    element: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
