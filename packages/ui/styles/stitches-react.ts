import { createStitches, CSS as StitchesCSS, VariantProps } from '@stitches/react';
import { BaseHTMLAttributes } from 'react';

const MODAL_ROOT_SELECTOR = `#modal-root`;
export const MODAL_ROOT_ID = MODAL_ROOT_SELECTOR.slice(1);

//#region Stitches Base Style Configuration
export const { styled, css, getCssText, createTheme, globalCss, config, keyframes } =
  createStitches({
    media: {
      mobile: '(max-width: 640px)',
      tablet: '(max-width: 1024px)',
    },
    theme: {
      fonts: {
        body: "'IBM Plex Sans KR', sans-serif",
      },
      fontSizes: {
        button: '14px',
      },
      colors: {
        // text
        primary: '#18223c',
        'on-primary': '#ffffff',
        secondary: '#3C486B',
        'on-secondary': '#ffffff',
        tertiary: '#9b9b9b',
        'on-tertiary': '#ffffff',
        'accent-y': '#F9D949',
        'on-accent-y': '#ffffff',
        'accent-r': '#F45050',
        'on-accent-r': '#ffffff',
        'modal-background': 'rgba(0, 0, 0, 0.5)',
        'input-background': '#fafafa',

        // background
        background: '#F0F0F0',
        disabled: '#cacfcf',
      },
    },
  });
//#endregion

export const globalStyles = globalCss({
  '@import': [
    // About Fonts
    "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@200;400;600&display=swap')",
  ],
  // Modal Configuration
  [MODAL_ROOT_SELECTOR]: {
    position: 'fixed',
    top: 0,
    left: 0,
    // width: '100%',
    // height: '100%',
  },
});

globalStyles();

export const darkTheme = createTheme('dark', {
  colors: {
    primary: '#ffffff',
    secondary: '#dadce6',
    tertiary: '#9b9b9b',
    'accent-y': '#F9D949',
    'accent-r': '#F45050',
    background: '#18223c',
    'modal-background': 'rgba(0, 0, 0, 0.5)',
  },
});

type CSS = StitchesCSS<typeof config>;

type CSSWithElement<T> = CSS & BaseHTMLAttributes<T>;

export type { VariantProps, CSS, CSSWithElement };

// Hex To RGB
export const h2r = (hex: string) =>
  hex
    .match(/[A-Za-z0-9]{2}/g)!
    .map((v) => parseInt(v, 16))
    .join(' ');
