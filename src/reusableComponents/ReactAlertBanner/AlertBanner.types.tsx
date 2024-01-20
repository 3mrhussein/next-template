import { ReactNode } from 'react';
import { HexColor } from '../shared/globalTypes';

export const ColorSchema = {
  info: {
    color: '#0074cc' as HexColor,
  },
  warning: {
    color: '#FFA500' as HexColor,
  },
  error: {
    color: '#FF0000' as HexColor,
  },
  success: {
    color: '#008000' as HexColor,
  },
};

export type AlertTypes = 'info' | 'success' | 'error' | 'warning';
export interface AlertBannerProps {
  type?: AlertTypes;
  color?: HexColor;
  duration?: number;
  fullWidth?: boolean;
  iconColor?: HexColor;
  text: { header?: string; message: string | React.ReactElement };
}

export interface AlertContainerProps {
  $frameColor?: HexColor;
  children?: ReactNode;
  fullWidth?: boolean;
}

export interface AlertHeaderProps {
  children?: ReactNode;
  $frameColor?: HexColor;
}
