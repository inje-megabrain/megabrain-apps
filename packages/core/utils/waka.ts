import { WakaMember, WakaMemberResponse, WakaOrganization, WakaRawUnit, WakaUnit } from '../types';

export const transformRawIntoWakaMember = (raw: WakaMemberResponse): WakaMember => {
  return {
    id: raw.id,
    name: raw.name,
    organization: raw.organization as WakaOrganization,
    startDate: new Date(raw.startDate).valueOf(),
    updateDate: new Date(raw.updateDate).valueOf(),
    seven: {
      during: parseWakaStringTime(raw.sevenDays),
      projects: raw.sevenprojects.map(parseWakUnit),
      languages: raw.sevenlanguages.map(parseWakUnit),
      editors: raw.seveneditors.map(parseWakUnit),
    },
    fourteen: {
      during: parseWakaStringTime(raw.fourteenDays),
      projects: [],
      languages: [],
      editors: [],
    },
    thirty: {
      during: parseWakaStringTime(raw.thirtyDays),
      projects: raw.thirtyDaysProjects.map(parseWakUnit),
      languages: raw.thirtyDaysLanguage.map(parseWakUnit),
      editors: raw.thirtyDaysEditors.map(parseWakUnit),
    },
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
const wakaUnitTimeRegx = /(\d+):(\d+)/;
const parseWakUnit = (u: WakaRawUnit): WakaUnit => {
  let minutes = 0;

  const matches = wakaUnitTimeRegx.exec(u.time);
  if (matches) {
    minutes = parseInt(matches[0]) * 60 + parseInt(matches[1]);
  }
  return {
    id: u.id,
    name: u.name,
    time: minutes,
  };
};
