import { ColorScheme } from '../index';
import { DarkThemeColors, DarkThemeGradients, DarkThemeStates } from '../colors';

export default {
  ...DarkThemeColors,
  gradient: DarkThemeGradients,
  background: DarkThemeColors.monochrome100,
  state: DarkThemeStates,
} as ColorScheme;
