import { Projects, ProjectDatabaseCollection, ProjectDatabaseCollectionItem } from '../types';

const memberProperties = [
  { key: 'id', type: 'string' },
  { key: 'properties', type: 'object' },
] as const;

const memberContentProperties = ['name', 'studentYear', 'position', 'github'] as const;

export function isProjectDatabaseCollectionItem(obj: any): obj is ProjectDatabaseCollectionItem {
  if (obj && typeof obj === 'object') {
    return (
      memberProperties.every((prop) => prop.key in obj && typeof obj[prop.key] === prop.type) &&
      memberContentProperties.every((prop) => prop in obj['properties'])
    );
  }
  return false;
}

export function filterProjectDatabaseCollection(collection: unknown): ProjectDatabaseCollection {
  if (Array.isArray(collection)) {
    return collection.filter((item) => isProjectDatabaseCollectionItem(item));
  }
  return [];
}

export function decompositionProjectDatabaseCollection(
  collection: ProjectDatabaseCollection
): Projects[] {
  return collection.map(parseProject);
}

function parseProject(item: ProjectDatabaseCollectionItem): Projects {
  const p = item.properties;

  return {
    android: p.android.url,
    contact: p.contact.email,
    description: p.description.rich_text[0].text.content,
    developer: p.developer.people,
    id: item.id,
    ios: p.ios.url,
    link: p.link.url,
    platform: p.platform.multi_select,
    status: p.status.status,
    techstack: p.techstack.multi_select,
    title: p.title.title[0].text.content,
  };
}
