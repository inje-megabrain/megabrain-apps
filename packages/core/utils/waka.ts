import {
  WakaDepartment,
  WakaMember,
  WakaMemberResponse,
  WakaOrganization,
  WakaPeriod,
} from '../types';

export const transformRawIntoWakaMember = (raw: WakaMemberResponse): WakaMember => {
  return {
    id: raw.id,
    name: raw.name,
    organization: raw.organization as WakaOrganization,
    startDate: new Date(raw.startDate).valueOf(),
    image: raw.image,
    money: parseWakaMoney(raw.money),
    department: raw.department as WakaDepartment,
    [WakaPeriod.Seven]: parseWakaStringTime(raw.sevenDays),
    [WakaPeriod.Fourteen]: parseWakaStringTime(raw.fourteenDays),
    [WakaPeriod.Thirty]: parseWakaStringTime(raw.thirtyDays),
  };
};
const wakaStringTimeRegx = /(\d+) hrs (\d+) mins/;
const parseWakaStringTime = (time: string): number => {
  const matches = wakaStringTimeRegx.exec(time);
  if (matches) {
    return parseInt(matches[0]) * 60 + parseInt(matches[1]);
  } else {
    return 0;
  }
};
const parseWakaMoney = (raw: WakaMemberResponse['money']) => raw.amount;
// const wakaUnitTimeRegx = /(\d+):(\d+)/;
// const parseWakUnit = (u: WakaRawUnit): WakaUnit => {
//   let minutes = 0;

//   const matches = wakaUnitTimeRegx.exec(u.time);
//   if (matches) {
//     minutes = parseInt(matches[0]) * 60 + parseInt(matches[1]);
//   }
//   return {
//     id: u.id,
//     name: u.name,
//     time: minutes,
//   };
// };

export const wakaNumberToTime = (val: number) => {
  return {
    hour: Math.trunc(val / 60),
    minute: val % 60,
  };
};

export const WakaPeriodToString = {
  [WakaPeriod.Seven]: '7일',
  [WakaPeriod.Fourteen]: '14일',
  [WakaPeriod.Thirty]: '30일',
} as const;
