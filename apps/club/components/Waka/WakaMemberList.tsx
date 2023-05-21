import { useEffect, useMemo } from 'react';
import { Flex, List, ListProps } from '@megabrain/ui';
import { WakaMember, WakaPeriod } from '@megabrain/core';

import { memberKey, randomImageUrl } from './utils';
import { useWakaMemberDispatch, useWakaMemberValue } from './contexts/member';
import { progressWrapperStyle, informationStyle, listContainerStyle } from './WakaMemberList.style';
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

export const WakaMemberList: React.FC<WakaMemberListProps> = ({ members }) => {
  const value = useWakaMemberValue();
  const dispatch = useWakaMemberDispatch();

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
      css={listContainerStyle}
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
};

export default WakaMemberList;

const WakaMemberListItem: ListProps<WakaMember, AdditionalProps>['children'] = (
  item,
  seqNo,
  additional
) => {
  const time = item[additional!.period]!.during;

  return (
    <>
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
            css={{
              paddingRight: 20,
            }}
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
          seqNo={seqNo}
        />
        <Flex
          css={informationStyle}
          gravity="all"
          direction="col"
        >
          <WakaSalaryText time={time} />
          <WakaTimeText time={time} />
        </Flex>
      </Flex>
      <hr />
    </>
  );
};
