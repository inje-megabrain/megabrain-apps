import { CSS } from '@megabrain/ui/styles';
import { MouseEventHandler } from 'react';
import { baseTextComponent } from './Text.styles';

type TextType = 'primary' | 'secondary' | 'tertiary' | 'accent-r' | 'accent-y' | 'inherit';

type TextDisplay = 'block' | 'inlineBlock' | 'inline';

type TextAlign = 'center' | 'left' | 'right';

type TextWeight = 'thin' | 'normal' | 'bold';

export interface TextProps {
  tag?: keyof typeof baseTextComponent;
  css?: CSS;
  children: string; // Only String
  onClick?: MouseEventHandler<HTMLElement>;
  ellipsis?: boolean;
  display?: TextDisplay;
  type?: TextType;
  align?: TextAlign;
  weight?: TextWeight;
}
