export interface WakaMember {
  id: string;
  name: string;
  organization: string;
  sevenDays: string;
  fourteenDays: string;
  secretKey: string;
  thirtyDays: string;
  projects: string[];
  languages: string[];
  editors: string[];
  sevenprojects: string[];
  sevenlanguages: string[];
  seveneditors: string[];
  thirtyDaysProjects: string[];
  thirtyDaysLanguage: string[];
  thirtyDaysEditors: string[];
  startDate: string;
  updateDate: string;
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
