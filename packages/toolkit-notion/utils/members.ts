import { Member, MemberDatabaseCollection, MemberDatabaseCollectionItem } from '../types';

const memberProperties = [
  { key: 'id', type: 'string' },
  { key: 'properties', type: 'object' },
] as const;

const memberContentProperties = ['name', 'studentYear', 'position', 'github'] as const;

export function isMemberDatabaseCollectionItem(obj: any): obj is MemberDatabaseCollectionItem {
  if (obj && typeof obj === 'object') {
    return (
      memberProperties.every((prop) => prop.key in obj && typeof obj[prop.key] === prop.type) &&
      memberContentProperties.every((prop) => prop in obj['properties'])
    );
  }
  return false;
}

export function filterMemberDatabaseCollection(collection: unknown): MemberDatabaseCollection {
  if (Array.isArray(collection)) {
    return collection.filter((item) => isMemberDatabaseCollectionItem(item));
  }
  return [];
}

export function decompositionMemberDatabaseCollection(
  collection: MemberDatabaseCollection
): Member[] {
  return collection.map(parseMember);
}

function parseMember(item: MemberDatabaseCollectionItem): Member {
  const p = item.properties;

  return {
    id: item.id,
    name: p.name.title[0].text.content,
    studentYear: p.studentYear.number,
    position: p.position.multi_select,
    github: p.github.rich_text[0].text.content,
  };
}
