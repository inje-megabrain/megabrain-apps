import { styled, css } from '@megabrain/ui/styles';
import type { TextComponentTag } from './types';
import { StyledComponent } from '@stitches/react/types/styled-component';

const baseTextCss = css({});

export const baseTextComponent: {
  [K in TextComponentTag]: StyledComponent<K>;
} = {
  h1: styled('h1', baseTextCss),
  p: styled('p', baseTextCss),
  span: styled('span', baseTextCss),
};
