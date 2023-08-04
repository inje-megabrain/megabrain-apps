import { WakaUnit } from '@megabrain/core';
import { Flex, Text } from '@megabrain/ui';
import { ApexChart } from '~/libs/apex-chart';
import { wakaUnitToValueSeries, pieChartOption, wakaTimeStr } from '../utils';
import { getMaxIndex } from '~/utils';

interface WakaEditorProps {
  editors: WakaUnit[];
}

export const WakaEditor: React.FC<WakaEditorProps> = ({ editors }) => {
  const editorSeries = wakaUnitToValueSeries(editors);
  const maxEditorIdx = getMaxIndex(editorSeries);

  return (
    <Flex
      direction="col"
      items="center"
    >
      <Text
        tag="p"
        align="center"
      >
        <b>{editors[maxEditorIdx].name}</b>를{' '}
        <Text
          type="accent-r"
          weight="bold"
        >
          {wakaTimeStr(editorSeries[maxEditorIdx])}
        </Text>
        으로 가장 많이 사용했습니다.
      </Text>
      <ApexChart
        height={300}
        width={380}
        type="pie"
        series={editorSeries}
        options={pieChartOption(editors)}
      />
    </Flex>
  );
};

export default WakaEditor;
