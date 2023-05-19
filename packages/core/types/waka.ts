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
  seven: WakaPeriod;
  fourteen: WakaPeriod;
  thirty: WakaPeriod;
  startDate: number;
  updateDate: number;
}

export interface WakaPeriod {
  during: number;
  projects: WakaUnit[];
  languages: WakaUnit[];
  editors: WakaUnit[];
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
}

export interface WakaMemberAPIKeyUpdatePayload {
  id: string;
  apiKey: string;
}
