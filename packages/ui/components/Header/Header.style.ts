import { styled } from '@megabrain/ui/styles';

export const BaseHeader = styled('header', {
  $$color: '$colors$primary',
  $$backgroundColor: '$colors$background',
  $$onColor: '$colors$on-primary',

  width: '100%',
  height: '64px',

  display: 'flex',
  justifyContent: 'space-between',
});

export default BaseHeader;
