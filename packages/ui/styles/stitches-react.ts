import { createStitches, CSS as StitchesCSS } from '@stitches/react';

export const MODAL_ROOT_ID = 'modal-root';

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
});

export const darkTheme = createTheme('dark', {
  colors: {
    primary: '#ffffff',
    secondary: '#dadce6',
    tertiary: '#9b9b9b',
    'accent-y': '#F9D949',
    'accent-r': '#F45050',
    background: '#18223c',
  },
});

export type CSS = StitchesCSS<typeof config>;

// Hex To RGB
export const h2r = (hex: string) =>
  hex
    .match(/[A-Za-z0-9]{2}/g)!
    .map((v) => parseInt(v, 16))
    .join(' ');
