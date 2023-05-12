import { styled } from '@/styles';

export const BaseButton = styled('button', {
  $$color: '$colors$primary',
  $$backgroundColor: '$colors$background',
  $$onColor: '$colors$on-primary',

  fontWeight: 'inherit',
  fontFamily: '$body',
  fontSize: '$button',
  background: '$$backgroundColor',
  color: '$$color',

  border: 0,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  padding: '6px 16px',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  svg: {
    display: 'inline-block',
    height: '100%',
    margin: 'auto 0px',
  },

  variants: {
    color: {
      primary: {
        $$color: '$colors$primary',
        $$backgroundColor: '$colors$background',
        $$onColor: '$colors$on-primary',
      },
      secondary: {
        $$color: '$colors$secondary',
        $$backgroundColor: '$colors$background',
        $$onColor: '$colors$on-secondary',
      },
      tertiary: {
        $$color: '$colors$tertiary',
        $$backgroundColor: '$colors$background',
        $$onColor: '$colors$on-tertiary',
      },
      'accent-y': {
        $$color: '$colors$accent-y',
        $$backgroundColor: '$colors$background',
        $$onColor: '$colors$on-accent-y',
      },
      'accent-r': {
        $$color: '$colors$accent-r',
        $$backgroundColor: '$colors$background',
        $$onColor: '$colors$on-accent-r',
      },
      inherit: {
        $$color: 'inherit',
        $$backgroundColor: 'inherit',
        $$onColor: 'inherit',
      },
    },
    type: {
      text: {
        background: 'transparent',
      },
      contained: {
        background: '$$color',
        color: '$$onColor',
        border: 0,
      },
      outlined: {
        background: 'transparent',
        border: '1px solid $$color',
      },
    },
    size: {
      small: {
        fontSize: 12,
      },
      medium: {
        fontSize: 14,
      },
      large: {
        fontSize: 16,
      },
      inherit: {
        fontSize: 'inherit',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        $$color: '$colors$disabled',
        $$backgroundColor: '$colors$disabled',
        $$onColor: '#ffffff',
      },
    },
    iconOnly: {
      true: {
        aspectRatio: 1,
        svg: {
          margin: 'auto',
        },
      },
    },
  },
});

export const BaseButtonText = styled('span', {
  marginTop: 'auto',
  marginBottom: 'auto',
});

export default BaseButton;
