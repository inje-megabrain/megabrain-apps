import { CSSWithElement } from '@megabrain/ui/styles';

export const itemContainer: CSSWithElement<HTMLDivElement> = {
  borderTop: '2px solid #f7f7f8',
  '& > *': {
    margin: '10px 0 10px 15px',
    paddingRight: '15px',
  },
  '& > *:not(:last-child)': {
    borderRight: '2px solid #f7f7f8',
  },

  '@mobile': {
    '& > *:not(:last-child)': {
      borderRight: 'none',
      borderBottom: '2px solid #f7f7f8',
      marginBottom: 0,
      paddingBottom: 10,
    },
  },
};
export const skillContainer: CSSWithElement<HTMLDivElement> = {
  marginLeft: 'auto !important',
  '@mobile': {
    margin: 'auto !important',
  },
};
