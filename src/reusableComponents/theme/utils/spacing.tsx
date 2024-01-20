import { DimensionTypes, spaces } from '../layout';

export type SpacingTypes = DimensionTypes | number | 'auto';

export const spacing = (...args: SpacingTypes[]): string => {
  const ZERO = '0px ';
  if (args.length === 0) {
    return ZERO;
  }

  if (args.length > 4) {
    throw new Error('Spacing function takes 4 arguments max.');
  }

  const spacingValue = args.reduce((prev, dimension: SpacingTypes) => {
    if (typeof dimension === 'number') {
      return `${prev} ${dimension}px`;
    }
    if (dimension === 'auto') {
      return `${prev} ${dimension}`;
    }
    return `${prev} ${spaces[dimension]}px`;
  }, '');

  return spacingValue;
};
