import { styled } from '@megabrain/ui/styles';

export const BaseContainer = styled('div', {
  display: 'block',
  background: 'transparent',
  variants: {
    //#region Display
    background: {
      true: {
        background: '$background',
      },
    },
    display: {
      none: {
        display: 'none',
      },
      block: {
        display: 'block',
      },
      'inline-block': {
        display: 'inline-block',
      },
      inline: {
        display: 'inline',
      },
      flex: {
        display: 'flex',
      },
      grid: {
        display: 'grid',
      },
    },
    //#endregion

    flow: {
      true: {
        flex: 1,
      },
    },

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

    full: {
      horizontal: {
        width: '100%',
      },
      vertical: {
        height: '100%',
      },
      all: {
        height: '100%',
        width: '100%',
      },
    },

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
    gravity: {
      all: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      vertical: {
        display: 'flex',
        alignItems: 'center',
      },
      horizontal: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    layoutCenter: {
      true: {
        width: 975,
        margin: '0px auto',
        '@tablet': {
          width: 750,
        },
        '@mobile': {
          width: 580,
        },
      },
    },
    //#endregion
  },
});
