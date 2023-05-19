import type {
  NotionDateProperty,
  NotionHrefProperty,
  NotionMultiSelectionProperty,
  NotionSelectionProperty,
  NotionTextProperty,
  NotionTitleProperty,
} from './base';

export interface Recruit {
  id: string;
  description: string;
  position: NotionMultiSelectionProperty['multi_select'];
  startDate: Date;
  status: NotionSelectionProperty['select'];
  target: NotionMultiSelectionProperty['multi_select'];
  url: string;
  endDate: Date;
  title: string;
}

export interface RecruitDatabaseCollectionItem {
  id: string;
  properties: {
    description: NotionTextProperty;
    position: NotionMultiSelectionProperty;
    startDate: NotionDateProperty;
    status: NotionSelectionProperty;
    target: NotionMultiSelectionProperty;
    url: NotionHrefProperty;
    endDate: NotionDateProperty;
    title: NotionTitleProperty;
  };
}

export type RecruitDatabaseCollection = RecruitDatabaseCollectionItem[];
