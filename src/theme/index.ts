import themeDefault from './default';
import themeDark from './dark';
import { Layout } from './layout';
import { Text } from './text';
import { Colors, Gradients, States } from './colors';

export type ColorsType = typeof Colors;
export interface ColorScheme extends ColorsType {
  background: string;
  gradient: typeof Gradients;
  state: typeof States;
}

export interface DefaultTheme {
  name: string;
  color: ColorScheme;
  layout: Layout;
  text: Text;
}
export { themeDefault, themeDark };

export const gridPropsList = [
  /* Grid props */
  'fluid',

  /* Row props */
  'reverse',
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
  'first',
  'last',

  /* Col props */
  'xs',
  'sm',
  'md',
  'lg',
  'xsOffset',
  'smOffset',
  'mdOffset',
  'lgOffset',
];
