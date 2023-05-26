import { WakaDaily, WakaUnit, wakaNumberToTime } from '@megabrain/core';
import { sumOfWakaDailyUnits } from '.';

export const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const wakaUnitToKeyValueSeries = (units: WakaUnit[]) => [
  {
    data: units.map((p) => ({ x: p.name, y: p.time })),
  },
];

export const wakaDayToValueSeries = (days: WakaDaily[]) =>
  days.map((v) => sumOfWakaDailyUnits(v.editor));
export const wakaUnitToValueSeries = (units: WakaUnit[]) => units.map((u) => u.time);
export const wakaUnitToLabels = (units: WakaUnit[]) => units.map((u) => u.name);
export const wakaDailyUnitsToLabels = (units: WakaDaily[]) =>
  units.map((u) => DAY_OF_WEEK[new Date(u.date).getDay()]);

export const PROJECT_CHART_OPTION: ApexCharts.ApexOptions = {
  chart: {
    toolbar: { show: false },
  },
  legend: {
    show: false,
  },
  colors: [
    '#33b2df',
    '#546E7A',
    '#d4526e',
    '#13d8aa',
    '#A5978B',
    '#2b908f',
    '#f9a3a4',
    '#90ee7e',
    '#f48024',
    '#69d2e7',
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      distributed: true,
      dataLabels: {
        position: 'bottom',
      },
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    offsetX: 0,
    style: {
      colors: ['#fff'],
      fontWeight: 400,
    },
    formatter(val, opts) {
      const time = wakaNumberToTime(val as number);
      return `${opts.w.globals.labels[opts.dataPointIndex]} : ${time.hour}시간 ${time.minute}분`;
    },
    dropShadow: {
      enabled: true,
      blur: 2,
      color: '#222',
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff'],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    tickAmount: 5,
    labels: {
      show: false,
    },
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
      formatter(val) {
        const time = wakaNumberToTime(val);
        return ` ${time.hour}시간 ${time.minute}분`;
      },
    },
  },
};

export const pieChartOption = (units: WakaUnit[]): ApexCharts.ApexOptions => ({
  labels: wakaUnitToLabels(units),
  legend: {
    position: 'bottom',
  },
  tooltip: {
    y: {
      formatter(val) {
        const time = wakaNumberToTime(val);
        return ` ${time.hour}시간 ${time.minute}분`;
      },
    },
  },
});

export const donutChartOption = (units: WakaDaily[]): ApexCharts.ApexOptions => ({
  labels: wakaDailyUnitsToLabels(units),
  colors: ['#90ee7e', '#f48024', '#69d2e7', '#33b2df', '#546E7A', '#d4526e', '#13d8aa'],
  legend: {
    position: 'right',
  },
  tooltip: {
    y: {
      formatter(val) {
        const time = wakaNumberToTime(val);
        return ` ${time.hour}시간 ${time.minute}분`;
      },
    },
  },
});
