import { useEffect, useMemo } from 'react';
import { WakaMember } from '@megabrain/core';

import { useWakaMemberDispatch, useWakaMemberValue } from '../contexts/member';
import { WakaMemberListView, WakaMemberListViewAdditionalProps } from './WakaMemberListView';

interface WakaMemberListProps {
  members: WakaMember[];
}

export const WakaMemberList: React.FC<WakaMemberListProps> = ({ members }) => {
  const value = useWakaMemberValue();
  const dispatch = useWakaMemberDispatch();

  useEffect(() => {
    if (Array.isArray(members)) {
      dispatch({ members });
    }
  }, [members, dispatch]);

  const additional = useMemo<WakaMemberListViewAdditionalProps>(
    () => ({
      period: value.period,
      limit: value.limit,
    }),
    [value]
  );

  return (
    <WakaMemberListView
      members={value.members || members}
      additional={additional}
    />
  );
};

export default WakaMemberList;
