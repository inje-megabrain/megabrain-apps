import { styled, css } from '@megabrain/ui/styles';

export const baseTextCss = css({
  color: 'inherit',

  fontWeight: 'inherit',
  fontFamily: '$body',
  margin: 0,

  variants: {
    //#region Color Type
    type: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      tertiary: {
        color: '$tertiary',
      },
      'accent-y': {
        color: '$accent-y',
      },
      'accent-r': {
        color: '$accent-r',
      },
      inherit: {
        color: 'inherit',
      },
    },
    //#endregion

    //#region Display
    display: {
      block: {
        display: 'block',
      },
      inlineBlock: {
        display: 'inline-block',
      },
      inline: {
        display: 'inline',
      },
      none: {
        display: 'none',
      },
    },
    //#endregion

    //#region Ellipsis
    ellipsis: {
      true: {
        textOverflow: 'ellipsis',
      },
    },
    //#endregion

    //#region Text Align
    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },

    full: {
      true: {
        width: '100%',
        height: '100%',
      },
    },
    //#endregion

    //#region Weight
    weight: {
      thin: {
        fontWeight: 200,
      },
      normal: {
        fontWeight: 400,
      },
      bold: {
        fontWeight: 600,
      },
    },
    //#endregion
  },
});

export const baseTextComponent = {
  h1: styled('h1', baseTextCss),
  p: styled('p', baseTextCss),
  span: styled('span', baseTextCss),
};
