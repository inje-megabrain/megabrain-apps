import { Text } from '@megabrain/ui';
import { wakaNumberToTime } from '@megabrain/core';

interface WakaSalaryTextProps {
  time: number;
}

const SALARY_PER_HOUR = 9620;

export const WakaSalaryText: React.FC<WakaSalaryTextProps> = ({ time }) => {
  return (
    <Text
      display="block"
      type="accent-r"
      align="center"
    >
      {Math.trunc((wakaNumberToTime(time).hour * SALARY_PER_HOUR) / 10000) + '만원'}
    </Text>
  );
};

export default WakaSalaryText;
