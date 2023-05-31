import { notionClient } from './base';
import { decompositionProjectDatabaseCollection, filterProjectDatabaseCollection } from '../utils';

export const getRawProjectList: any = async () =>
  notionClient
    ? await notionClient.databases.query({
        database_id: notion.PROJECT_DB_ID,
      })
    : null;

export const getProjectList = async () => {
  const raw = await getRawProjectList();

  if (raw) {
    return decompositionProjectDatabaseCollection(filterProjectDatabaseCollection(raw.results));
  }
};

export const projects = {
  listRaw: getRawProjectList,
  list: getProjectList,
};

export default projects;
