/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { ITheme } from 'Types/ThemeTypes';

export const theme: ITheme = {
  colors: {
    white1: '#f8f9fa',
    white2: '#dee2e6',
    white3: '#ced4da',
    primary1: '#00a6fb',
    primary2: '#0582ca',
    black1: '#242423',
    black2: '#333533',
    black3: '#495057',
  },
  fontSizes: {
    xSmall: '12px',
    small: '16px',
    medium: '20px',
    large: '24px',
    xLarge: '28px',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
