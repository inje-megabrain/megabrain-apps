import { styled } from '@megabrain/ui/styles';

export const Ranking = styled('span', {});

export const informationStyle = {
  width: 100,
  paddingLeft: 20,
  '@mobile': {
    display: 'none',
  },
};
export const progressWrapperStyle = {
  // marginTop: 10,
  '@mobile': {
    width: '270px',
    margin: '0 auto',
  },
};

export const listContainerStyle = {
  '& hr': {
    width: '60%',
    borderWidth: '0.1px',
    margin: '25px auto',
  },

  '& p': {
    margin: '0 0 10px 0',
  },

  '@mobile': {
    '& hr': {
      width: '120px',
    },
  },
};
