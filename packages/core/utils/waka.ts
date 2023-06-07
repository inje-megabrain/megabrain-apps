import {
  WakaDaily,
  WakaDailyUnit,
  WakaDepartment,
  WakaMember,
  WakaMemberDetail,
  WakaMemberDetailResponse,
  WakaMemberResponse,
  WakaOrganization,
  WakaPeriod,
  WakaRawDailyUnit,
  WakaRawUnit,
  WakaUnit,
} from '../types';

export const transformRawIntoWakaMemberDetail = ([
  user,
  stats,
]: WakaMemberDetailResponse): WakaMemberDetail => {
  return {
    name: user.name,
    organization: user.oranization as WakaOrganization,
    money: user.money.amount,
    lastDeposit: new Date(user.money.updateDate).valueOf(),
    githubId: parseGithubId(user.imageURL),
    imageUrl: user.imageURL,
    editors: user.totalEditors.map(parseWakaUnit),
    projects: user.totalProejects.map(parseWakaUnit),
    languages: user.totalLanguages.map(parseWakaUnit),
    days: parseWakaDaily(stats),
    department: user.department as WakaDepartment,
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
const wakaStringTimeRegex = /(\d+) hrs (\d+) mins?/;
const parseWakaStringTime = (time: string): number => {
  const matches = wakaStringTimeRegex.exec(time);
  if (matches) {
    return parseInt(matches[1]) * 60 + parseInt(matches[2]);
  } else {
    return 0;
  }
};
const parseGithubId = (url: string): string => url.slice(url.lastIndexOf('/') + 1);
const parseWakaDaily = (stats: WakaMemberDetailResponse['1']): WakaMemberDetail['days'] =>
  Object.keys(stats).reduce<WakaDaily[]>((acc, k) => {
    const v = stats[k];
    acc.push({
      date: new Date(k).valueOf(),
      editor: v.summariesEditors.map(parseWakaDailyUnit),
      language: v.summariesLanguages.map(parseWakaDailyUnit),
      project: v.summariesProjects.map(parseWakaDailyUnit),
    } satisfies WakaDaily);

    return acc;
  }, []);

const parseWakaDailyUnit = (u: WakaRawDailyUnit): WakaDailyUnit => ({
  name: u.name,
  percents: u.percent,
  minutes: u.hours * 60 + u.minutes,
});

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
