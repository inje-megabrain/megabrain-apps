import { styled } from '@megabrain/ui/styles';

export const BaseInput = styled('input', {
  backgroundColor: '$input-background',
  borderRadius: 8,
  padding: '8px 16px',
  color: '$primary',
  outline: 'none',
  border: 'none',
  fontSize: 16,
  fontWeight: 400,
  margin: '3px 5px',

  variants: {
    error: {
      true: {
        borderColor: '$accent-r',
        borderWidth: 1,
      },
    },
    disable: {
      true: {
        cursor: 'not-allowed',
      },
    },
    color: {
      inherit: {
        backgroundColor: 'inherit',
        color: 'inherit',
      },
    },
    noBorder: {
      true: {
        border: 'none',
      },
    },
  },
});
