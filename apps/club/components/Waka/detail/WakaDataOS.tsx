import { WakaUnit } from '@megabrain/core';
import { Container, Flex, Text } from '@megabrain/ui';
import { useMemo } from 'react';
import { ApexChart } from '~/libs/apex-chart';
import {
  PROJECT_CHART_OPTION,
  filterWakUnit,
  wakaUnitToKeyValueSeries,
  wakaUnitToValueSeries,
  pieChartOption,
} from '../utils';

interface WakaDataOSProps {
  projects: WakaUnit[];
  editors: WakaUnit[];
}
export const WakaDataOS: React.FC<WakaDataOSProps> = ({ projects, editors }) => {
  const projectSeries = useMemo(() => {
    const items = filterWakUnit(projects, 60).sort((lhs, rhs) => rhs.time - lhs.time);
    return wakaUnitToKeyValueSeries(items.slice(0, 5));
  }, [projects]);

  return (
    <Flex
      flow
      css={{
        '@tablet': {
          rowGap: 20,
          flexDirection: 'column',
        },
      }}
    >
      <Container flow>
        <Text
          tag="p"
          align="center"
        >
          사용하는 에디터는 무엇인가요?
        </Text>
        <ApexChart
          height={300}
          width={380}
          type="pie"
          series={wakaUnitToValueSeries(editors)}
          options={pieChartOption(editors)}
        />
      </Container>
      <Container flow>
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
      </Container>
    </Flex>
  );
};

export default WakaDataOS;
