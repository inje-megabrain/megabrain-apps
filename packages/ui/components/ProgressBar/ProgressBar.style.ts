import { styled } from '@megabrain/ui/styles';

export const BaseProgressBar = styled('div', {
  height: '100%',
  width: 0,

  variants: {
    animation: {
      true: {},
    },
    border: {
      true: {
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
      },
    },
  },
});

export const BaseProgressTrack = styled('div', {
  width: '100%',
  height: '100%',

  variants: {
    border: {
      true: {
        overflow: 'hidden',
        borderRadius: '6px',
      },
    },
  },
});
