import { WakaMember, WakaPeriod } from '@megabrain/core';

export const randomImageUrl = (seed: string) =>
  `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}`;

export const memberKey = (member: WakaMember) => member.id;

export const WakaTimeLimit = {
  [WakaPeriod.Seven]: 4200, // 70h
  [WakaPeriod.Fourteen]: 8400,
  [WakaPeriod.Thirty]: 12600,
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
