import { WakaMemberDetail } from '@megabrain/core';
import { Flex, Text } from '@megabrain/ui';
import { ApexChart } from '~/libs/apex-chart';
import { DAY_OF_WEEK, donutChartOption, wakaDayToValueSeries, wakaTimeStr } from '../utils';

interface WakaTotalDailyProps {
  detail: WakaMemberDetail;
}

export const WakaTotalDaily: React.FC<WakaTotalDailyProps> = ({ detail }) => {
  const sortedDays = [...detail.days].sort((lhs, rhs) => lhs.date - rhs.date);

  const series = wakaDayToValueSeries(sortedDays);

  const maxTimeIdx = series.reduce((acc, d, i) => (series[acc] < d ? i : acc), 0);

  return (
    <Flex
      direction="col"
      items="center"
    >
      <Text
        align="center"
        css={{ marginBottom: 15 }}
      >
        <b>{DAY_OF_WEEK[maxTimeIdx]}요일</b>에{' '}
        <Text
          type="accent-r"
          weight="bold"
        >
          {wakaTimeStr(series[maxTimeIdx])}
        </Text>
        으로 가장 길게 코딩을 했습니다.
      </Text>
      <ApexChart
        height={300}
        width={380}
        type="donut"
        series={wakaDayToValueSeries(sortedDays)}
        options={donutChartOption(sortedDays)}
      />
    </Flex>
  );
};

export default WakaTotalDaily;
