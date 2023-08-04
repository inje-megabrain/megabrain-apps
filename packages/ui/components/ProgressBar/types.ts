import { CSS } from '@megabrain/ui/styles';
import { BaseHTMLAttributes } from 'react';

export interface ProgressBarProps {
  percentage: string;
  animation?: boolean;
  trackCss?: BaseHTMLAttributes<HTMLDivElement> & CSS;
  progressCss?: BaseHTMLAttributes<HTMLDivElement> & CSS;
  trackBorder?: boolean;
  progressBorder?: boolean;
}
