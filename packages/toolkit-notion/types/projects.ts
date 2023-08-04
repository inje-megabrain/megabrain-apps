import type {
  NotionEmailProperty,
  NotionHrefProperty,
  NotionMultiSelectionProperty,
  NotionPeopleProperty,
  NotionStatusProperty,
  NotionTextProperty,
  NotionTitleProperty,
} from './base';

export interface Projects {
  id: string;
  title: string;
  description: string;
  status: { name: string; color: string };
  platform: NotionMultiSelectionProperty['multi_select'];
  link: string;
  developer: NotionPeopleProperty['people'];
  contact: string;
  android: string;
  ios: string;
  techstack: NotionMultiSelectionProperty['multi_select'];
}
export interface ProjectDatabaseCollectionItem {
  id: string;
  properties: {
    title: NotionTitleProperty;
    description: NotionTextProperty;
    status: NotionStatusProperty;
    platform: NotionMultiSelectionProperty;
    link: NotionHrefProperty;
    developer: NotionPeopleProperty;
    contact: NotionEmailProperty;
    android: NotionHrefProperty;
    ios: NotionHrefProperty;
    techstack: NotionMultiSelectionProperty;
  };
}

export type ProjectDatabaseCollection = ProjectDatabaseCollectionItem[];
