'use client';

// AlertBanner.js
import React from 'react';
import { AlertContainer, AlertHeader, AlertBody } from './AlertBanner.styled';
import { AlertBannerProps } from './AlertBanner.types';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/default';
import { AlertIcon, ErrorIcon } from '@/theme/icons';
import InfoIcon from '@/theme/icons/info';
import { WarningIcon } from '@/theme/icons/warning';
import SuccessIcon from '@/theme/icons/success';
const AlertBanner: React.FC<AlertBannerProps> = (props) => {
  const { text, fullWidth, frameColor = 'monochrome300', type = 'info', iconColor = '#fff' } = props;

  return (
    <ThemeProvider theme={theme}>
      <AlertContainer fullWidth={fullWidth} $frameColor={frameColor}>
        <AlertHeader $frameColor={frameColor}>
          {type == 'info' && <InfoIcon color={iconColor} />}
          {type == 'error' && <ErrorIcon color={iconColor} />}
          {type == 'warning' && <WarningIcon color={iconColor} />}
          {type == 'success' && <SuccessIcon color={iconColor} />}
        </AlertHeader>
        <AlertBody>
          {text?.header && <h2 className="text-start">{text.header}</h2>}
          {text.message && <div className={`${text?.header ? 'text-start' : 'text-center'}`}>{text.message}</div>}
        </AlertBody>
      </AlertContainer>
    </ThemeProvider>
  );
};

export default AlertBanner;
