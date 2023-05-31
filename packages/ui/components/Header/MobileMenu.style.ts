import { styled } from '@megabrain/ui/styles';

export const BaseMobileMenu = styled('div', {
  $$color: '$colors$primary',
  $$backgroundColor: '$colors$background',
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
  backgroundColor: '#FFFFFFDD',
  backdropFilter: 'blur(14px)',
  textAlign: 'left',

  '@mobile': {
    display: 'inline-flex',
    button: {
      position: 'absolute',
      cursor: 'pointer',
      top: '0',
      right: '0',
      margin: '12px 12px 0 0',
      width: 'auto',
      backgroundColor: 'transparent',
      color: '$$color',
      border: '0',
      fontSize: '32px',
      fontWeight: 'bold',
    },
    div: {
      margin: '0',
      width: 'calc(100vw - 40px)',
      height: 'auto',
      button: {
        position: 'relative',
        textAlign: 'left',
        fontWeight: 'inherit',
      },
      display: 'flex',
      position: 'relative',
      transition: 'all 0.15s ease-in-out',
      flexDirection: 'column',
      div: {
        position: 'relative',

        width: '100%',
        height: 'auto',
        div: {
          position: 'relative',
          flexDirection: 'column',
          li: {
            listStyle: 'none',
            button: { fontSize: '23px', width: '100%', padding: '5px 7px' },
          },
        },
      },
    },
  },
});
