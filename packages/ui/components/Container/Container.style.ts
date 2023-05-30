import { styled } from '@megabrain/ui/styles';

export const BaseContainer = styled('div', {
  display: 'block',
  background: 'transparent',
  boxSizing: 'border-box',
  variants: {
    shadow: {
      true: {
        boxShadow: '0px 0px 7px rgba(0,0,0,0.1)',
      },
    },
    border: {
      true: {
        border: '1px solid #f7f7f8',
      },
    },
    background: {
      true: {
        background: '$background',
      },
    },
    radius: {
      true: {
        borderRadius: '8px',
      },
    },
    modal: {
      true: {
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%,-50%)',
      },
    },
    //#region Display
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
        width: 920,
        margin: '0px auto',
        '@tablet': {
          width: 600,
        },
        '@mobile': {
          width: 380,
        },
      },
    },
    //#endregion
  },
});
