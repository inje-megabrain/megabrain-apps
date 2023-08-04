import { Flex, Text } from '@megabrain/ui';
import { calcWeeklyWage } from '../utils';
interface WakaSalaryTextProps {
  time: number;
}

export const WakaSalaryText: React.FC<WakaSalaryTextProps> = ({ time }) => {
  return (
    <Flex>
      <img
        src="/coins.png"
        alt="$"
        width="30px"
      />
      <Text
        display="block"
        type="accent-r"
        align="right"
        css={{
          marginLeft: 13,
        }}
      >
        {calcWeeklyWage(time) + '만원'}
      </Text>
    </Flex>
  );
};

export default WakaSalaryText;
