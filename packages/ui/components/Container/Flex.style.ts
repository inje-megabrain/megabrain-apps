import { BaseContainer } from './Container.style';
import { styled } from '@megabrain/ui/styles';

export const BaseFlex = styled(BaseContainer, {
  display: 'flex',

  variants: {
    inline: {
      true: {
        display: 'inline-flex',
      },
    },

    nowrap: {
      true: {
        flexWrap: 'nowrap',
      },
    },

    direction: {
      row: {
        flexDirection: 'row',
      },
      col: {
        flexDirection: 'column',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      'col-reverse': {
        flexDirection: 'column-reverse',
      },
    },

    //#region JustifyContent
    justify: {
      end: {
        justifyContent: 'flex-end',
      },
      start: {
        justifyContent: 'flex-start',
      },
      between: {
        justifyContent: 'space-between',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
      around: {
        justifyContent: 'space-around',
      },
      center: {
        justifyContent: 'center',
      },
      left: {
        justifyContent: 'left',
      },
      right: {
        justifyContent: 'right',
      },
    },
    //#endregion

    //#region AlignItems
    items: {
      base: {
        alignItems: 'baseline',
      },
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    //#endregion
  },
});
