import { styled } from '@megabrain/ui/styles';

export const BaseCopyright = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  maxWidth: '100%',
  height: 'min-content' /* 51px */,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between !important',
  alignItems: 'center',
  padding: '30px 0px 0px 0px',
  overflow: 'visible',
  position: 'relative',
  alignContent: 'center',
  flexWrap: 'nowrap',
  borderRadius: '0px 0px 0px 0px',
  borderColor: 'rgba(255, 255, 255, 0.2)',
  borderStyle: 'solid',
  borderTopWidth: 1,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  margin: 0,
  '@mobile': {
    border: 0,
    p: { textAlign: 'center', width: '100%' },
  },
});
