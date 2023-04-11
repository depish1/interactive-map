export interface ITheme {
  colors: Record<ColorKeyType, HexColorType>;
  fontSizes: Record<FontSizeKeyType, PixelSizeType | RemSizeType>;
  boxShadows: Record<BoxShadowKeyType, string>;
}

type FontSizeKeyType = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
type BoxShadowKeyType = 'container' | 'element';

export type PixelSizeType = `${number}px`;
export type RemSizeType = `${number}rem`;

type ColorKeyType = 'white1' | 'white2' | 'white3' | 'primary1' | 'primary2' | 'primary3' | 'black1' | 'black2' | 'black3' | 'danger1' | 'danger2';

export type HexColorType = `#${string}`;
