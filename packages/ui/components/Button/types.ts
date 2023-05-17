import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { CSS } from '@megabrain/ui/styles';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inherit'
  | 'accent-r'
  | 'accent-y';

export type ButtonSize = 'small' | 'medium' | 'large' | 'inherit';

export type ButtonType = 'text' | 'contained' | 'outlined';

export interface ButtonProps {
  icon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
  css?: ButtonHTMLAttributes<HTMLButtonElement> & CSS;
  iconOnly?: boolean;
  children?: ReactNode;
  type?: ButtonType;
  rounded?: boolean;
}
