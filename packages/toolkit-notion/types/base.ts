export interface NotionTextProperty {
  rich_text: { text: { content: string } }[];
}

export interface NotionTitleProperty {
  title: { text: { content: string } }[];
}

export interface NotionMultiSelectionProperty {
  multi_select: { id: string; name: string; color: string }[];
}

export interface NotionSelectionProperty {
  select: { id: string; name: string; color: string }[];
}

export interface NotionDateProperty {
  date: {
    start: string;
  };
}

export interface NotionNumberProperty {
  number: number;
}

export interface NotionHrefProperty {
  url: string;
}

export interface NotionPeopleProperty {
  people: {
    id: string;
    name?: string;
  }[];
}

export interface NotionEmailProperty {
  email: string;
}

export interface NotionStatusProperty {
  status: {
    name: string;
    color: string;
  };
}
