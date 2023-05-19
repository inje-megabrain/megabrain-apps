import {
  decompositionRecruitDatabaseCollection,
  filterRecruitDatabaseCollection,
} from '../utils/recruit';
import { notionClient } from './base';

export { notionClient } from './base';

export const getRawRecruitList = async () =>
  notionClient
    ? await notionClient.databases.query({
        database_id: notion.RECRUIT_DB_ID,
      })
    : null;

export const getRecruitList = async () => {
  const raw = await getRawRecruitList();
  if (raw) {
    return decompositionRecruitDatabaseCollection(filterRecruitDatabaseCollection(raw.results));
  }
};

export const recruits = {
  listRaw: getRawRecruitList,
  list: getRecruitList,
};

export default recruits;
