export interface WakaMemberResponse {
  id: string;
  name: string;
  organization: string;
  sevenDays: string;
  fourteenDays: string;
  secretKey: string;
  thirtyDays: string;
  money: WakaRawMoney;
  image: string;
  department: string;
  startDate: string;
}

export type WakaMemberDetailResponse = [
  {
    name: string;
    totalEditors: WakaRawUnit[];
    totalLanguages: WakaRawUnit[];
    totalProejects: WakaRawUnit[];
    oranization: WakaOrganization;
    money: WakaRawMoney;
    imageURL: string;
  },
  Record<string, WakaRawDaily>
];

export interface WakaMemberDetail {
  name: string;
  organization: WakaOrganization;
  money: number;
  lastDeposit: number;
  githubId: string;
  imageUrl: string;
  editors: WakaUnit[];
  projects: WakaUnit[];
  languages: WakaUnit[];
  days: WakaDaily[];
}

export interface WakaDaily {
  date: number;
  editor: WakaDailyUnit[];
  language: WakaDailyUnit[];
  project: WakaDailyUnit[];
}

export interface WakaDailyUnit {
  name: string;
  minutes: number;
  percents: number;
}

export interface WakaRawDaily {
  summariesEditors: WakaRawDailyUnit[];
  summariesLanguages: WakaRawDailyUnit[];
  summariesProjects: WakaRawDailyUnit[];
}

export interface WakaRawDailyUnit {
  digital: string;
  total_seconds: number;
  hours: number;
  seconds: number;
  minutes: number;
  name: string;
  text: string;
  decimal: string;
  percent: number;
}

export interface WakaRawUnit {
  id: number;
  name: string;
  time: string;
}

export interface WakaMember {
  id: string;
  name: string;
  organization: WakaOrganization;
  money: number;
  image: string;
  department: WakaDepartment;
  [WakaPeriod.Seven]: number;
  [WakaPeriod.Fourteen]: number;
  [WakaPeriod.Thirty]: number;
  startDate: number;
}

export interface WakaRawMoney {
  id: number;
  amount: number;
  updateDate: Date;
}

export enum WakaDepartment {
  Backend = 'Backend',
  Frontend = 'Frontend',
}

export interface WakaDuring {
  during: number;
  projects: WakaUnit[];
  languages: WakaUnit[];
  editors: WakaUnit[];
}

export enum WakaPeriod {
  Seven,
  Fourteen,
  Thirty,
}

export interface WakaUnit {
  id: number;
  name: string;
  time: number; //"13 hrs 45 mins",
}

export enum WakaOrganization {
  Megabrain = '메가브레인',
  Dotgabi = '돗가비',
}

export interface WakaMemberPostPayload {
  name: string;
  organization: WakaOrganization;
  apiKey: string;
  githubName: string;
  department: WakaDepartment;
}

export interface WakaMemberAPIKeyUpdatePayload {
  id: string;
  apiKey: string;
}
export interface WakaMemberDetailGetPayload {
  id: string;
  date: 7 | 30;
}
