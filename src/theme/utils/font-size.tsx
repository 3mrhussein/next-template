import text from '@theme/text';

export type ViewportTypes = 'xxs' | 'm' | 'l';
export type SizeTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'small'
  | 'badge'
  | 'footnote'
  | 'code';

export const fontSize = (viewport: ViewportTypes, size: SizeTypes): string => {
  let fontSize = `font-size: ${text.size[viewport][size].fontSize}; `;
  fontSize += `line-height: ${text.size[viewport][size].lineHeight}; `;

  return fontSize;
};
