import {
  WakaDepartment,
  WakaMember,
  WakaMemberDetailResponse,
  WakaMemberResponse,
  WakaOrganization,
  WakaPeriod,
  WakaMemberDetail,
  WakaRawUnit,
  WakaUnit,
} from '../types';

export const transformRawIntoWakaMemberDetail = (
  raw: WakaMemberDetailResponse
): WakaMemberDetail => {
  return {
    name: raw.name,
    editors: raw.editors.map(parseWakaUnit),
    languages: raw.languages.map(parseWakaUnit),
    projects: raw.proejects.map(parseWakaUnit),
  };
};

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
const wakaStringTimeRegex = /(\d+) hrs (\d+) mins/;
const parseWakaStringTime = (time: string): number => {
  const matches = wakaStringTimeRegex.exec(time);
  if (matches) {
    return parseInt(matches[1]) * 60 + parseInt(matches[2]);
  } else {
    return 0;
  }
};
const parseWakaMoney = (raw: WakaMemberResponse['money']) => raw.amount;
const wakaUnitTimeRegex = /(\d+):(\d+)/;
const parseWakaUnit = (u: WakaRawUnit): WakaUnit => {
  let minutes = 0;

  const matches = wakaUnitTimeRegex.exec(u.time);
  if (matches) {
    minutes = parseInt(matches[1]) * 60 + parseInt(matches[2]);
  }
  return {
    id: u.id,
    name: u.name,
    time: minutes,
  };
};

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
