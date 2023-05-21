import { styled } from '@megabrain/ui/styles';

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
        height: '100%',
      },
      vertical: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
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
