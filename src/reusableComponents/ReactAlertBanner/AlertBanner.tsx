// AlertBanner.js
'use client';
import React from 'react';
import { AlertContainer, AlertHeader, AlertBody } from './AlertBanner.styled';
import { AlertBannerProps, ColorSchema } from './AlertBanner.types';
import { ErrorIcon, InfoIcon, WarningIcon, SuccessIcon } from '../shared/icons';

const ReactAlertBanner: React.FC<AlertBannerProps> = (props) => {
  const { text, fullWidth, color, type = 'info', iconColor = '#fff' } = props;

  return (
    <AlertContainer fullWidth={fullWidth} $frameColor={ColorSchema[type].color ?? color}>
      <AlertHeader $frameColor={ColorSchema[type].color ?? color}>
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
  );
};

export default ReactAlertBanner;
