import { Recruit, RecruitDatabaseCollection, RecruitDatabaseCollectionItem } from '../types/notion';

const recruitProperties = [
  { key: 'id', type: 'string' },
  { key: 'properties', type: 'object' },
] as const;

const recruitContentProperties = [
  'description',
  'position',
  'startDate',
  'status',
  'target',
  'url',
  'endDate',
  'title',
] as const;

export function isRecruitDatabaseCollectionItem(obj: any): obj is RecruitDatabaseCollectionItem {
  if (obj && typeof obj === 'object') {
    return (
      recruitProperties.every((prop) => prop.key in obj && typeof obj[prop.key] === prop.type) &&
      recruitContentProperties.every((prop) => prop in obj['properties'])
    );
  }
  return false;
}

export function filterRecruitDatabaseCollection(collection: unknown): RecruitDatabaseCollection {
  if (Array.isArray(collection)) {
    return collection.filter((item) => isRecruitDatabaseCollectionItem(item));
  }
  return [];
}

export function decompositionRecruitDatabaseCollection(
  collection: RecruitDatabaseCollection
): Recruit[] {
  return collection.map(parseRecruit);
}

function parseRecruit(item: RecruitDatabaseCollectionItem): Recruit {
  const p = item.properties;

  return {
    id: item.id,
    description: p.description.rich_text[0].text.content,
    position: p.position.multi_select,
    startDate: new Date(p.startDate.date.start),
    status: p.status.select,
    target: p.target.multi_select,
    url: p.url.url,
    endDate: new Date(p.endDate.date.start),
    title: p.title.title[0].text.content,
  };
}
