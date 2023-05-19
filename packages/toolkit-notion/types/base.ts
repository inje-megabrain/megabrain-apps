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

export interface NotionHrefProperty {
  url: string;
}
