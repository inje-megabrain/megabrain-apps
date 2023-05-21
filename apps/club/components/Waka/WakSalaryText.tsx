import { Flex, Text } from '@megabrain/ui';
import { wakaNumberToTime } from '@megabrain/core';
interface WakaSalaryTextProps {
  time: number;
}

const SALARY_PER_HOUR = 9620;

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
        {Math.trunc((wakaNumberToTime(time).hour * SALARY_PER_HOUR) / 10000) + '만원'}
      </Text>
    </Flex>
  );
};

export default WakaSalaryText;
