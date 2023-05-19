import { Flex, List, ListProps } from '@megabrain/ui';
import { WakaMember } from '@megabrain/core';

interface WakaMemberListProps {
  members: WakaMember[];
}

export const WakaMemberList: React.FC<WakaMemberListProps> = ({ members }) => {
  const getMemberKey = (member: WakaMember) => member.id;

  return (
    <Flex>
      <List
        getKey={getMemberKey}
        items={members}
      >
        {WakaMemberListItem}
      </List>
    </Flex>
  );
};

export default WakaMemberList;

const WakaMemberListItem: ListProps<WakaMember>['children'] = (item) => {
  return <>{item.name}</>;
};
