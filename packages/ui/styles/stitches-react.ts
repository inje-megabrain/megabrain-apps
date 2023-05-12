import { createStitches, CSS as StitchesCSS } from '@stitches/react';

//#region Stitches Base Style Configuration
export const { styled, css, getCssText, createTheme, globalCss, config } = createStitches({
  media: {
    mobile: '(max-width: 640px)',
    tablet: '(max-width: 1024px)',
  },
  theme: {
    fonts: {
      body: "'IBM Plex Sans KR', sans-serif",
    },
    colors: {
      // text
      primary: '#18223c',
      secondary: '#3C486B',
      tertiary: '#9b9b9b',
      'accent-y': '#F9D949',
      'accent-r': '#F45050',
      // background
      background: '#F0F0F0',
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
