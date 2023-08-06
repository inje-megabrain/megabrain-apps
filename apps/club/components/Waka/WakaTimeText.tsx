import { Text } from '@megabrain/ui';
import { wakaTimeStr } from './utils';

interface WakaTimeTextProps {
  time: number;
  bold?: boolean;
}

export const WakaTimeText: React.FC<WakaTimeTextProps> = ({ time, bold = true }) => {
  return (
    <Text
      display="block"
      tag="p"
      type="primary"
      weight={bold ? 'bold' : 'normal'}
      css={{
        margin: 'auto 0',
      }}
    >
      {wakaTimeStr(time)}
    </Text>
  );
};

export default WakaTimeText;
