import type {
  NotionMultiSelectionProperty,
  NotionNumberProperty,
  NotionTextProperty,
  NotionTitleProperty,
} from './base';

export interface Member {
  id: string;
  github: string;
  position: NotionMultiSelectionProperty['multi_select'];
  studentYear: number;
  name: string;
}

export interface MemberDatabaseCollectionItem {
  id: string;
  properties: {
    github: NotionTextProperty;
    position: NotionMultiSelectionProperty;
    studentYear: NotionNumberProperty;
    name: NotionTitleProperty;
  };
}

export type MemberDatabaseCollection = MemberDatabaseCollectionItem[];
