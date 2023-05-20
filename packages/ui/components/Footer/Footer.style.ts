import { styled } from '@megabrain/ui/styles';

export const BaseFooter = styled('header', {
  $$color: '$colors$background',
  $$backgroundColor: '$colors$primary',
  $$onColor: '$colors$accent-r',

  width: '100%',
  maxWidth: '100%',
  backgroundColor: '$$backgroundColor',
  color: '$$color',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  div: {
    flexShrink: 0,
    height: 'min-content' /* 137px */,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'self-start',
    overflow: 'visible',
    position: 'relative',
    padding: '0px 0px 0px 0px',
    margin: '30px 20px',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 40,
    borderRadius: '0px 0px 0px 0px',
    ul: {
      flexShrink: 0,
      width: 250,
      height: 'min-content' /* 137px */,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      overflow: 'visible',
      position: 'relative',
      padding: '0px 0px 0px 0px',
      alignContent: 'flex-start',
      flexWrap: 'nowrap',
      gap: 15,
      borderRadius: '0px 0px 0px 0px',
      li: {
        listStyle: 'none',
        '&:first-child': {
          button: {
            fontSize: '16px',
            fontWeight: 600,
          },
        },
        '&:not(:first-child)': {
          button: {
            fontSize: '14px',
            fontWeight: 400,
          },
        },
        button: {
          color: '$$color',
          backgroundColor: 'transparent',
          border: '0',
        },
      },
    },
    '@mobile': {
      margin: '30px 0px',
    },
  },
});

export default BaseFooter;
