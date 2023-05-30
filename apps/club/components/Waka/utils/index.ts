import {
  WakaDailyUnit,
  WakaMember,
  WakaMemberDetail,
  WakaPeriod,
  WakaUnit,
  wakaNumberToTime,
} from '@megabrain/core';
import { WakaMemberRank } from '../types';

export * from './chart';

const SALARY_PER_HOUR = 9620;

export const randomImageUrl = (seed: string) =>
  `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}`;

export const memberKey = (member: WakaMember) => member.id;

export const WakaTimeLimit = {
  [WakaPeriod.Seven]: 4200, // 70h
  [WakaPeriod.Fourteen]: 8400,
  [WakaPeriod.Thirty]: 12600,
};

// ! 반드시 내림차순 정렬된 배열을 넣으시오.
export const getWakaRankingTop3 = (members: WakaMember[]): WakaMemberRank[] => {
  return [
    {
      rank: 1,
      ...members[0],
    },
    {
      rank: 2,
      ...members[2],
    },
    {
      rank: 3,
      ...members[3],
    },
  ];
};

const ProgressColorScheme = [
  'rgb(231, 113, 91)',
  'rgb(77, 209, 53)',
  'rgb(176, 42, 145)',
  'rgb(25, 192, 142)',
  'rgb(234, 118, 4)',
  'rgb(239, 66, 88)',
  'rgb(216, 151, 221)',
  'rgb(233, 13, 254)',
  'rgb(225, 8, 27)',
  'rgb(239, 184, 138)',
  'rgb(75, 84, 186)',
  'rgb(253, 202, 108)',
  'rgb(61, 189, 12)',
  'rgb(16, 27, 213)',
];

export const getProgressBarColor = (index: number) =>
  ProgressColorScheme[index % ProgressColorScheme.length];

export const memberDetailUrl = (member: WakaMember) => `/waka/${member.id}`;

export const filterWakUnit = (units: WakaUnit[], minAmount: number) =>
  units.filter((u) => u.time >= minAmount);
export const sumOfWakaUnits = (units: WakaUnit[]) => units.reduce((acc, u) => acc + u.time, 0);
export const sortWakaUnits = (units: WakaUnit[]) => units.sort((lhs, rhs) => rhs.time - lhs.time);
export const sortWakaDetail = (detail: WakaMemberDetail) => {
  sortWakaUnits(detail.languages);
  sortWakaUnits(detail.projects);
  sortWakaUnits(detail.editors);

  return detail;
};
export const calcWeeklyWage = (minutes: number) =>
  Math.trunc((wakaNumberToTime(minutes).hour * SALARY_PER_HOUR) / 10000);

export const sumOfWakaDailyUnits = (units: WakaDailyUnit[]) =>
  units.reduce((acc, v) => acc + v.minutes, 0);

export const wakaTimeStr = (time: number) => {
  const t = wakaNumberToTime(time);
  return `${t.hour}시간 ${t.minute}분`;
};
