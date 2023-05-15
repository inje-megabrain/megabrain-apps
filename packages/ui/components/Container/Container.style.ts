import { styled } from '@/styles';
import { css } from '@stitches/react';

const baseCenter = css({
  width: 1200,
  '@tablet': {
    width: 975,
  },
  '@mobile': {
    width: 580,
  },
});

export const BaseContainer = styled('div', {
  display: 'block',

  variants: {
    //#region Display

    display: {
      block: {
        display: 'block',
      },
      'inline-block': {
        display: 'inline-block',
      },
      inline: {
        display: 'inline',
      },
    },
    //#endregion

    //#region Padding
    pad: {
      true: {
        padding: '10px 15px',
      },
    },

    m: {
      true: {
        margin: '10px 15px',
      },
    },
    //#endregion

    //#region  Scroll
    overflow: {
      hidden: {
        overflow: 'hidden',
      },
      'scroll-y-auto': {
        overflowY: 'auto',
        overflowX: 'hidden',
      },
      'scroll-x-auto': {
        overflowY: 'hidden',
        overflowX: 'auto',
      },
      'scroll-y-always': {
        overflowY: 'scroll',
        overflowX: 'hidden',
      },
      'scroll-x-always': {
        overflowY: 'hidden',
        overflowX: 'scroll',
      },
      always: {
        overflow: 'scroll',
      },
    },
    //#endregion

    //#region Center
    center: {
      full: {
        ...baseCenter,
      },
      vertical: {
        ...baseCenter,
        margin: 'auto 0px',
      },
      horizontal: {
        ...baseCenter,
        margin: '0px auto',
      },
    },
    //#endregion
  },
});
