import { DefaultTheme } from '../index';

export const isDarkMode = (theme: DefaultTheme) => theme.name === 'ws10dark';
export const isLightMode = (theme: DefaultTheme) => theme.name === 'ws10light';
