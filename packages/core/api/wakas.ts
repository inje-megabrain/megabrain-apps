import {
  WakaMemberAPIKeyUpdatePayload,
  WakaMemberDetailGetPayload,
  WakaMemberDetailResponse,
  WakaMemberPostPayload,
  WakaMemberResponse,
} from '../types';
import { transformRawIntoWakaMember, transformRawIntoWakaMemberDetail } from '../utils/waka';
import { createEndpoint, transformEndpoint } from './base';

export const getWakaMembers = transformEndpoint(
  createEndpoint<WakaMemberResponse[]>('GET', () => `${global.core.WAKA_BASE_URL}/members`, {
    async mock() {
      return [];
    },
  }),
  (raw) => raw.map(transformRawIntoWakaMember)
);

export const getWakaMemberDetail = transformEndpoint(
  createEndpoint<WakaMemberDetailResponse, WakaMemberDetailGetPayload>(
    'GET',
    ({ id, date }) => `${global.core.WAKA_BASE_URL}/members/${id}?date=${date}`
  ),
  transformRawIntoWakaMemberDetail
);

export const postWakaMember = createEndpoint<void, WakaMemberPostPayload>(
  'POST',
  ({ organization, name, apiKey, githubName, department }) =>
    `${global.core.WAKA_BASE_URL}/${name}?organization=${organization}&apiKey=${apiKey}&github_Id=${githubName}&department=${department}`,
  { mirror: true, successOnly: true }
);

export const updateWakaMemberAPIKey = createEndpoint<void, WakaMemberAPIKeyUpdatePayload>(
  'POST',
  ({ id, apiKey }) => `${global.core.WAKA_BASE_URL}/members/${id}?apiKey=${apiKey}`,
  { mirror: true }
);

export const deleteWakaMember = createEndpoint(
  'DELETE',
  (id: string) => `${global.core.WAKA_BASE_URL}/waka/members/${id}`
);

export const updateWakaMemberTime = createEndpoint(
  'POST',
  (range: 1 | 7 | 14 | 30) => `${global.core.WAKA_BASE_URL}/waka/members?date=${range}`
);

const wakas = {
  members: getWakaMembers,
  updateAPIKey: updateWakaMemberAPIKey,
  postMember: postWakaMember,
  deleteMember: deleteWakaMember,
  updateTime: updateWakaMemberTime,
  detail: getWakaMemberDetail,
};

export default wakas;
