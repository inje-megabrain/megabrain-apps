import { WakaMember, WakaPeriod } from '@megabrain/core';

export const randomImageUrl = (seed: string) =>
  `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}`;

export const memberKey = (member: WakaMember) => member.id;

export const WakaTimeLimit = {
  [WakaPeriod.Seven]: 4200, // 70h
  [WakaPeriod.Fourteen]: 8400,
  [WakaPeriod.Thirty]: 12600,
};
