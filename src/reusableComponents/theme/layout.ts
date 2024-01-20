import { Dimensions } from './dimensions';

export type DimensionTypes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
//@ts-ignore
export const spaces: {
  [key in DimensionTypes]: number;
} = {
  [Dimensions.xxs]: 4,
  [Dimensions.xs]: 8,
  [Dimensions.s]: 12,
  [Dimensions.m]: 16,
  [Dimensions.l]: 20,
  [Dimensions.xl]: 24,
  [Dimensions.xxl]: 32,
  [Dimensions.xxxl]: 64,
};

export const baseFontSize = 16;

export const breakpointsInPixel = {
  [Dimensions.xs]: 320,
  [Dimensions.s]: 480,
  [Dimensions.m]: 768, // Start of tablet size
  [Dimensions.l]: 1025, // Start of desktop size
  [Dimensions.xl]: 1441,
};

export const containerMaxWidth = {
  [Dimensions.xs]: 319,
  [Dimensions.s]: 479,
  [Dimensions.m]: 767, // Max width of mobile
  [Dimensions.l]: 1024, // Max width of tablet
  [Dimensions.xl]: 1440,
  [Dimensions.xxl]: 2560,
};

export interface Layout {
  spacing: (token: DimensionTypes) => string;
  baseFontSize: number;
  breakpoint: { [key in DimensionTypes]: number | string };
  maxWidth: { [key in DimensionTypes]: number | string };
}

export default {
  spacing: (token = Dimensions.xs) => `${spaces[token]}px`,
  baseFontSize: baseFontSize,
  breakpoint: {
    [Dimensions.xs]: breakpointsInPixel.xs,
    [Dimensions.s]: breakpointsInPixel.s,
    [Dimensions.m]: breakpointsInPixel.m,
    [Dimensions.l]: breakpointsInPixel.l,
    [Dimensions.xl]: breakpointsInPixel.xl,
  },
  maxWidth: {
    [Dimensions.xs]: containerMaxWidth.xs,
    [Dimensions.s]: containerMaxWidth.s,
    [Dimensions.m]: containerMaxWidth.m,
    [Dimensions.l]: containerMaxWidth.l,
    [Dimensions.xl]: containerMaxWidth.xl,
    [Dimensions.xxl]: containerMaxWidth.xxl,
  },
} as Layout;
