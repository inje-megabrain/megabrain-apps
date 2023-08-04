import {
  decompositionMemberDatabaseCollection,
  filterMemberDatabaseCollection,
} from '../utils/members';
import { notionClient } from './base';

export const getRawMemberList = async () =>
  notionClient
    ? await notionClient.databases.query({
        database_id: notion.MEMBER_DB_ID,
      })
    : null;

export const getMemberList = async () => {
  const raw = await getRawMemberList();
  if (raw) {
    return decompositionMemberDatabaseCollection(filterMemberDatabaseCollection(raw.results));
  }
};

export const members = {
  listRaw: getRawMemberList,
  list: getMemberList,
};

export default members;
