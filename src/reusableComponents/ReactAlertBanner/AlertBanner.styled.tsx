import styled from 'styled-components';
import { AlertContainerProps, AlertHeaderProps } from './AlertBanner.types';
import React from 'react';

export const AlertContainer: React.FC<AlertContainerProps> = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '350px')};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  border: 2px solid ${({ $frameColor }) => $frameColor};
`;

export const AlertHeader: React.FC<AlertHeaderProps> = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $frameColor }) => $frameColor};
  color: black;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const AlertBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: inherit;
  padding: 16px;
  color: black;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  h2,
  p {
    text-align: start;
    svg {
      color: '#339';
    }
  }
  .text-start {
    text-align: start;
  }
  .text-center {
    text-align: center;
  }
`;
