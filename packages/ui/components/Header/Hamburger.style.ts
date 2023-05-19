import { styled } from '@megabrain/ui/styles';

export const Hamburger = styled('button', {
  $$color: '$colors$primary',
  $$backgroundColor: '$colors$background',
  $$onColor: '$colors$accent-r',

  fill: '$$backgroundColor',
  width: '56px',
  height: '56px',
  border: '0',
  opacity: '0',
  transition: 'all 0.15s ease-in-out',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    $$color: '$$onColor',
  },
  '@mobile': {
    opacity: '1',
  },
});

export default Hamburger;
