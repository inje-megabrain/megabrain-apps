import { styled } from '@megabrain/ui/styles';

export const BaseModal = styled('div', {
  width: '100vw',
  height: '100vh',
  background: '$modal-background',
  display: 'none',
  position: 'fixed',
  zIndex: 1000,

  variants: {
    open: {
      true: {
        display: 'block',
      },
    },
  },
});

export const BaseModalBackface = styled('div', {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: -1,
  inset: '0px',

  variants: {
    clearBackground: {
      true: {
        backgroundColor: 'inherit',
      },
    },
    animation: {
      true: {}, // ! TODO
    },
  },
});
