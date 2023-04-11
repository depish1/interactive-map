/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { ITheme } from 'Types/ThemeTypes';

export const theme: ITheme = {
  colors: {
    white1: '#f8f9fa',
    white2: '#e8e9ea',
    white3: '#b8b9ba',
    primary1: '#0582ca',
    primary2: '#00a6fb',
    primary3: '#00487c',
    black1: '#242423',
    black2: '#333533',
    black3: '#495057',
    error: '#D2001A',
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
