/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { ITheme } from 'Types/ThemeTypes';

export const theme: ITheme = {
  colors: {
    white1: '#ffffff',
    white2: '#f0f1f2',
    white3: '#6c757d',
    primary1: '#004e89',
    primary2: '#407ba7',
    primary3: '#002962',
    black1: '#242423',
    black2: '#333533',
    black3: '#6c757daa',
    black4: '#6c757d44',
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
    container: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    element: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  },
  zIndexes: {
    openSideBarButton: 2,
    sideBar: 3,
    zoomPanel: 2,
    hoverCountryLabel: 2,
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
