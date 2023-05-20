import { useEffect, useMemo } from 'react';
import { Flex, List, ListProps } from '@megabrain/ui';
import { WakaMember, WakaPeriod } from '@megabrain/core';

import { memberKey, randomImageUrl } from './utils';
import { useWakaListDispatch, useWakaListValue, wrapWakaListContext } from './contexts/list';
import { progressWrapperStyle, informationStyle } from './WakaMemberList.style';
import { WakaTimeText } from './WakaTimeText';
import { WakaSalaryText } from './WakSalaryText';
import { WakaTimeProgressBar } from './WakaTimeProgressBar';

interface WakaMemberListProps {
  members: WakaMember[];
}

interface AdditionalProps {
  period: WakaPeriod;
  limit: number;
}

export const WakaMemberList: React.FC<WakaMemberListProps> = wrapWakaListContext(({ members }) => {
  const value = useWakaListValue();
  const dispatch = useWakaListDispatch();

  useEffect(() => {
    if (Array.isArray(members)) {
      dispatch({ members });
    }
  }, [members, dispatch]);

  const additional = useMemo<AdditionalProps>(
    () => ({
      period: value.period,
      limit: value.limit,
    }),
    [value]
  );

  return (
    <Flex
      direction="col"
      layoutCenter
    >
      <List
        getKey={memberKey}
        items={value.members || members}
        additional={additional}
      >
        {WakaMemberListItem}
      </List>
    </Flex>
  );
});

export default WakaMemberList;

const WakaMemberListItem: ListProps<WakaMember, AdditionalProps>['children'] = (
  item,
  seqNo,
  additional
) => {
  const time = item[additional!.period]!.during;

  return (
    <Flex
      direction={{
        '@initial': 'row',
        '@mobile': 'col',
      }}
    >
      <Flex justify="center">
        <Flex
          direction="col"
          items="center"
        >
          <img
            src={randomImageUrl(item.name)}
            alt={item.name}
            width={65}
            height={65}
            loading="lazy"
          />
          {item.name}
        </Flex>
        <Flex
          display={{
            '@initial': 'none',
            '@mobile': 'flex',
          }}
          direction="col"
          justify="end"
        >
          <WakaSalaryText time={time} />
          <WakaTimeText time={time} />
        </Flex>
      </Flex>

      <WakaTimeProgressBar
        time={time}
        limit={additional!.limit}
        css={progressWrapperStyle}
      />
      <Flex
        css={informationStyle}
        gravity="all"
        direction="col"
      >
        <WakaTimeText time={time} />
        <WakaSalaryText time={time} />
      </Flex>
    </Flex>
  );
};
