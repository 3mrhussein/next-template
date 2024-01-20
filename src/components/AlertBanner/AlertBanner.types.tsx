import { ColorsType } from '@theme/index';
import { ReactElement, ReactNode } from 'react';
import { HexColor } from '../shared/globalTypes';
export type ColorSchema = {
  info: {
    color: '#1945c7';
  };
  warning: {
    color: '#FFA500';
  };
  error: {
    color: '#FF0000';
  };
  success: {
    color: '#008000';
  };
};

export type AlertTypes = 'info' | 'success' | 'error' | 'warning';
export interface AlertBannerProps {
  type?: AlertTypes;
  frameColor?: keyof ColorsType | undefined;
  duration?: number;
  fullWidth?: boolean;
  iconColor?: HexColor;
  text: { header?: string; message: string | ReactElement };
}

export interface AlertContainerProps {
  $frameColor?: keyof ColorsType | undefined;
  children?: ReactNode;
  fullWidth?: boolean;
}

export interface AlertHeaderProps {
  children?: ReactNode;
  $frameColor?: keyof ColorsType | undefined;
}
