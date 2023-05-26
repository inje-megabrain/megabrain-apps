import { Flex, List, ListProps, Text } from '@megabrain/ui';
import { WakaMember, WakaPeriod } from '@megabrain/core';

import { memberDetailUrl, memberKey } from '../utils';
import { progressWrapperStyle, informationStyle, listContainerStyle } from './WakaMemberList.style';
import { WakaTimeText } from '../WakaTimeText';
import { WakaSalaryText } from './WakSalaryText';
import { WakaTimeProgressBar } from './WakaTimeProgressBar';
import Link from 'next/link';

interface WakaMemberListViewProps {
  members: WakaMember[];
  additional: WakaMemberListViewAdditionalProps;
}

export interface WakaMemberListViewAdditionalProps {
  period: WakaPeriod;
  limit: number;
}

export const WakaMemberListView: React.FC<WakaMemberListViewProps> = ({ members, additional }) => {
  return (
    <Flex
      direction="col"
      css={listContainerStyle}
      layoutCenter
    >
      <List
        getKey={memberKey}
        items={members}
        additional={additional}
      >
        {WakaMemberListItem}
      </List>
    </Flex>
  );
};

const WakaMemberListItem: ListProps<WakaMember, WakaMemberListViewAdditionalProps>['children'] = (
  item,
  seqNo,
  additional
) => {
  const time = item[additional!.period];

  return (
    <>
      <Link href={memberDetailUrl(item)}>
        <Flex
          direction={{
            '@initial': 'row',
            '@mobile': 'col',
          }}
          css={{
            cursor: 'pointer',
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
                referrerPolicy="no-referrer"
                src={item.image}
                alt={item.name}
                width={65}
                height={65}
                loading="lazy"
                style={{
                  marginBottom: 3,
                }}
              />
              <Text>{item.name}</Text>
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
      </Link>
      <hr />
    </>
  );
};
