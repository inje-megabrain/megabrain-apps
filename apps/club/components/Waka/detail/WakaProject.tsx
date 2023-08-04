import { WakaUnit } from '@megabrain/core';
import { Flex, Text } from '@megabrain/ui';
import { useMemo } from 'react';
import { ApexChart } from '~/libs/apex-chart';
import { PROJECT_CHART_OPTION, filterWakUnit, wakaUnitToKeyValueSeries } from '../utils';

interface WakaProjectProps {
  projects: WakaUnit[];
}
export const WakaProject: React.FC<WakaProjectProps> = ({ projects }) => {
  const projectSeries = useMemo(() => {
    const items = filterWakUnit(projects, 60).sort((lhs, rhs) => rhs.time - lhs.time);
    return wakaUnitToKeyValueSeries(items.slice(0, 5));
  }, [projects]);

  return (
    <Flex
      direction="col"
      items="center"
    >
      <Text
        tag="p"
        align="center"
      >
        주로 작업하는 프로젝트는 무엇인가요?
      </Text>
      <ApexChart
        height={280}
        width={380}
        type="bar"
        series={projectSeries}
        options={PROJECT_CHART_OPTION}
      />
    </Flex>
  );
};

export default WakaProject;
