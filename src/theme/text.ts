import { Dimensions } from './dimensions';

interface TextProperties {
  fontSize?: string;
  lineHeight?: number;
}

interface TextSizes {
  h1: TextProperties;
  h2: TextProperties;
  h3: TextProperties;
  h4: TextProperties;
  h5: TextProperties;
  body: TextProperties;
  small: TextProperties;
  badge: TextProperties;
  footnote: TextProperties;
  code: TextProperties;
}

export interface Text {
  size: {
    xxs: TextSizes; // mobile
    m: TextSizes; // tablet
    l: TextSizes; // desktop
  };
  weight: {
    light: number;
    normal: number;
    bold: number;
  };
}

export default {
  size: {
    [Dimensions.xxs]: {
      h1: {
        fontSize: '2rem',
        lineHeight: 1.25,
      },
      h2: {
        fontSize: '1.75rem',
        lineHeight: 1.29,
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: 1.25,
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.125rem',
        lineHeight: 1.34,
      },
      body: {
        fontSize: '1rem',
        lineHeight: 1.38,
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: 1.29,
      },
      badge: {
        fontSize: '0.875rem',
        lineHeight: 1.29,
      },
      footnote: {
        fontSize: '0.875rem',
        lineHeight: 1.125,
      },
      code: {
        fontSize: '0.875rem',
        lineHeight: 1.29,
      },
    },
    [Dimensions.m]: {
      h1: {
        fontSize: '3.5rem',
        lineHeight: 1.11,
      },
      h2: {
        fontSize: '2.5rem',
        lineHeight: 1.2,
      },
      h3: {
        fontSize: '2.125rem',
        lineHeight: 1.18,
      },
      h4: {
        fontSize: '1.5rem',
        lineHeight: 1.25,
      },
      h5: {
        fontSize: '1.25rem',
        lineHeight: 1.4,
      },
      body: {
        fontSize: '1.125rem',
        lineHeight: 1.34,
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: 1.29,
      },
      badge: {
        fontSize: '1rem',
        lineHeight: 1.38,
      },
      footnote: {
        fontSize: '0.875rem',
        lineHeight: 1.125,
      },
      code: {
        fontSize: '1rem',
        lineHeight: 1.38,
      },
    },
    [Dimensions.l]: {
      h1: {
        fontSize: '4rem',
        lineHeight: 1.13,
      },
      h2: {
        fontSize: '3.5rem',
        lineHeight: 1.11,
      },
      h3: {
        fontSize: '2.5rem',
        lineHeight: 1.2,
      },
      h4: {
        fontSize: '1.75rem',
        lineHeight: 1.21,
      },
      h5: {
        fontSize: '1.25rem',
        lineHeight: 1.4,
      },
      body: {
        fontSize: '1.125rem',
        lineHeight: 1.34,
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: 1.29,
      },
      badge: {
        fontSize: '1rem',
        lineHeight: 1.38,
      },
      footnote: {
        fontSize: '0.875rem',
        lineHeight: 1.125,
      },
      code: {
        fontSize: '1rem',
        lineHeight: 1.38,
      },
    },
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
} as Text;
