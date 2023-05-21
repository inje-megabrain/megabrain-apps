export interface WakaMemberResponse {
  id: string;
  name: string;
  organization: string;
  sevenDays: string;
  fourteenDays: string;
  secretKey: string;
  thirtyDays: string;
  projects: WakaRawUnit[];
  languages: WakaRawUnit[];
  editors: WakaRawUnit[];
  sevenprojects: WakaRawUnit[];
  sevenlanguages: WakaRawUnit[];
  seveneditors: WakaRawUnit[];
  thirtyDaysProjects: WakaRawUnit[];
  thirtyDaysLanguage: WakaRawUnit[];
  thirtyDaysEditors: WakaRawUnit[];
  startDate: string;
  updateDate: string;
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
  [WakaPeriod.Seven]: WakaDuring;
  [WakaPeriod.Fourteen]?: WakaDuring;
  [WakaPeriod.Thirty]?: WakaDuring;
  startDate: number;
  updateDate: number;
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
}

export interface WakaMemberAPIKeyUpdatePayload {
  id: string;
  apiKey: string;
}
