import { CSS, VariantProps } from '@megabrain/ui/styles';
import { BaseInput } from './Input.style';
import { ChangeEventHandler } from 'react';

export interface InputProps extends VariantProps<typeof BaseInput> {
  validate?(value: string): boolean;
  errorEl?: JSX.Element;
  onValueChange?(value: string): void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value: string;
  css?: CSS;
  placeholder?: string;
}
