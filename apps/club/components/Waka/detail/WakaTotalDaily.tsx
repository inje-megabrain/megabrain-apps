import { WakaMemberDetail } from '@megabrain/core';
import { Flex } from '@megabrain/ui';
import { BubbleChart } from '~/libs/react-bubble-chart';

import { DAY_OF_WEEK, sumOfWakaDailyUnits } from '../utils';

interface WakaTotalDailyProps {
  detail: WakaMemberDetail;
}

export const WakaTotalDaily: React.FC<WakaTotalDailyProps> = ({ detail }) => {
  const data = detail.days.map((d) => ({
    label: DAY_OF_WEEK[new Date(d.date).getDay()],
    value: sumOfWakaDailyUnits(d.project),
  }));

  return (
    <Flex
      direction="col"
      items="center"
    >
      {/* <ApexChart
        height={300}
        width={380}
        type="donut"
        series={wakaDayToValueSeries(sortedDays)}
        options={donutChartOption(sortedDays)}
      /> */}
      <BubbleChart data={data} />
    </Flex>
  );
};

export default WakaTotalDaily;
