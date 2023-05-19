import { styled } from '@megabrain/ui/styles';

export const BaseMobileMenu = styled('div', {
  $$color: '$colors$background',
  $$backgroundColor: '$colors$primary',
  $$onColor: '$colors$accent-r',

  position: 'absolute',
  opacity: '1',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'none',
  padding: '0',
  margin: '0',
  zIndex: '9999',
  backgroundColor: '#000000CD',
  backdropFilter: 'blur(7px)',

  '@mobile': {
    display: 'flex',
    button: {
      position: 'absolute',
      cursor: 'pointer',
      top: '0',
      right: '0',
      margin: '12px 12px 0 0',
      width: '32px',
      height: '32px',
      backgroundColor: 'transparent',
      color: '$$color',
      border: '0',
      fontSize: '32px',
      fontWeight: 'bold',
    },
    ul: {
      button: {
        position: 'relative',
        fontWeight: 'inherit',
      },
      display: 'flex',
      position: 'relative',
      transition: 'all 0.15s ease-in-out',
      flexDirection: 'column',
      height: 'auto',
      li: {
        display: 'flex',

        position: 'relative',

        width: '100%',
        height: 'auto',
        ul: {
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          li: {
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
          },
        },
      },
    },
  },
});
