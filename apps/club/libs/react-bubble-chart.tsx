import dynamic from 'next/dynamic';
import React from 'react';

export const _ReactBubbleChart = dynamic<any>(() => import('@testboxlab/react-bubble-chart-d3'), {
  ssr: false,
});

type ChartData = {
  label: string;
  value: number;
};

export class BubbleChart extends React.Component<{ data: ChartData[] }> {
  render(): React.ReactNode {
    return (
      <_ReactBubbleChart
        graph={{
          zoom: 1.1,
          offsetX: -0.05,
          offsetY: -0.01,
        }}
        overflow={true}
        width={400}
        height={400}
        padding={5}
        showLegend={true} // optional value, pass false to disable the legend.
        legendPercentage={10} // number that represent the % of with that legend going to use.
        legendFont={{
          // family: 'Arial',
          size: 12,
          color: '#000',
          weight: 'bold',
        }}
        valueFont={{
          // family: 'Arial',
          size: 16,
          color: 'red',
          weight: 'bold',
        }}
        labelFont={{
          // family: 'Arial',
          size: 16,
          color: '#fff',
          weight: 'bold',
        }}
        bubbleClickFunc={() => {}}
        legendClickFun={() => {}}
        data={this.props.data}
      />
    );
  }
}
