import { styled } from '@megabrain/ui/styles';

export const BaseHeader = styled('header', {
  $$color: '$colors$primary',
  $$backgroundColor: '#FFFFFF80',
  $$onColor: '$colors$accent-r',

  width: 'calc(100vw - 48px)',
  padding: '0 12px',
  margin: '12px',
  height: '58px',
  borderRadius: '8px',
  border: '1px solid #FFFFFF80',
  color: '$$color',
  backgroundColor: '$$backgroundColor',
  position: 'fixed',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@mobile': {
    margin: 0,
    border: 0,
    width: 'calc(100vw - 12px)',
    padding: '0 6px',
    borderRadius: 0,
    ul: {
      li: {
        div: {
          ul: {
            display: 'flex',
          },
        },
      },
    },
  },

  ul: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    margin: '0',
    height: '100%',
    li: {
      height: '100%',
      listStyle: 'none',
      margin: '0 4px',
      button: {
        height: '100%',
        padding: '8px 16px',
        color: '$$color',
        backgroundColor: 'transparent',
        border: '0',
        transition: 'all 0.15s ease-in-out',
        fontSize: '17px',
        cursor: 'pointer',
        '&:hover': {
          color: '$$onColor',
        },
      },
      '&:hover': {
        ul: {
          opacity: '1',
          pointerEvents: 'auto',
        },
      },
      div: {
        ul: {
          position: 'absolute',
          opacity: '0',
          pointerEvents: 'none',
          display: 'flex',
          margin: '0',
          backgroundColor: '#FFFFFFEE',
          top: '55.2px',
          height: 'auto',
          flexDirection: 'column',
          justifySelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '0',
          transition: 'all 0.2s ease-in-out',
          li: {
            listStyle: 'none',
            margin: '0',
            padding: '0',
            button: {
              width: '200px',
              padding: '8px 16px',
              color: '$$color',
              textAlign: 'left',
              borderBottom: 'solid 1px white',
              transition: 'all 0.2s ease-in-out',
              transitionDelay: '0.2s',
              marginBottom: '3px',
              '&:hover': {
                color: '$$onColor',
              },
              '&:first-child': {
                transitionDelay: '0.1s',
              },
            },
          },
        },
      },
    },
    '@mobile': {
      display: 'none',
    },
  },
});

export default BaseHeader;
