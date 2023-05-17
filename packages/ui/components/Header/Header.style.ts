import { styled } from '@/styles';

export const BaseHeader = styled('header', {
  $$color: '$colors$background',
  $$backgroundColor: '$colors$primary',
  $$onColor: '$colors$accent-r',

  width: '100vw',
  maxWidth: '100vw',
  height: '56px',
  backgroundColor: '$$backgroundColor',
  color: '$$color',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0',
  margin: '0',
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
        width: '80px',
        height: '100%',
        padding: '8px 16px',
        color: '$$color',
        backgroundColor: 'transparent',
        border: '0',
        transition: 'all 0.15s ease-in-out',
        fontSize: '14px',
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
          height: '200px',
          position: 'absolute',
          opacity: '0',
          pointerEvents: 'none',
          display: 'flex',
          margin: '0',
          top: '56px',
          left: '0',
          flexDirection: 'row',
          backgroundColor: '$$backgroundColor',
          width: '100vw',
          justifySelf: 'stretch',
          alignItems: 'center',
          padding: '8px 0',
          transition: 'all 0.2s ease-in-out',
          li: {
            listStyle: 'none',
            margin: '0',
            padding: '0',
            button: {
              width: '200px',
              padding: '8px 16px',
              color: '$$color',
              border: 'solid 2px transparent',
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
  },
  '@mobile': {
    ul: {
      display: 'none',
    },
  },
});

export default BaseHeader;
