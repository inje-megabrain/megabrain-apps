import { Text } from '@megabrain/ui';
import { wakaNumberToTime } from '@megabrain/core';

interface WakaTimeTextProps {
  time: number;
}

export const WakaTimeText: React.FC<WakaTimeTextProps> = ({ time }) => {
  return (
    <Text
      display="block"
      tag="p"
      type="primary"
      weight="bold"
      align="center"
    >
      {listItemTimeStr(time)}
    </Text>
  );
};

export default WakaTimeText;

const listItemTimeStr = (time: number) => {
  const t = wakaNumberToTime(time);
  return `${t.hour}시간 ${t.minute}분`;
};
