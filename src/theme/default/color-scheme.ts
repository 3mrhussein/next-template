import { ColorScheme } from '../index';
import { Colors, Gradients, States } from '../colors';

export default {
  ...Colors,
  gradient: Gradients,
  background: Colors.monochrome200,
  state: States,
} as ColorScheme;
