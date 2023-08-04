import { Flex, List, ListProps } from '@megabrain/ui';
import { useWakaMemberValue } from '../contexts/member';
import { useMemo } from 'react';
import { getWakaRankingTop3, memberKey } from '../utils';
import { WakaMemberRank as IWakaMemberRank } from '../types';

export const WakaMemberRank: React.FC = () => {
  const ctx = useWakaMemberValue();

  const winners = useMemo(() => {
    return Array.isArray(ctx.members) ? getWakaRankingTop3(ctx.members) : [];
  }, [ctx]);

  const additional = useMemo(() => ctx.period, [ctx]);
  return (
    <Flex direction="row">
      <List
        items={winners}
        getKey={memberKey}
        additional={additional}
      >
        {WakaRankingListItem}
      </List>
    </Flex>
  );
};

export default WakaMemberRank;

const WakaRankingListItem: ListProps<IWakaMemberRank, number>['children'] = () =>
  // item,
  // seqNo,
  // additional
  {
    return <Flex direction="col"></Flex>;
  };
