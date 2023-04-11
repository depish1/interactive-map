export interface ITheme {
  colors: Record<ColorKeyType, HexColorType>;
  fontSizes: Record<FontSizeKeyType, PixelSizeType | RemSizeType>;
}

type FontSizeKeyType = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

export type PixelSizeType = `${number}px`;
export type RemSizeType = `${number}rem`;

type ColorKeyType = 'white1' | 'white2' | 'white3' | 'primary1' | 'primary2' | 'black1' | 'black2' | 'black3' | 'error';

export type HexColorType = `#${string}`;
