import { WakaMemberAPIKeyUpdatePayload, WakaMemberPostPayload, WakaMemberResponse } from '../types';
import { transformRawIntoWakaMember } from '../utils/waka';
import { createEndpoint, transformEndpoint } from './base';

export const getWakaMembers = transformEndpoint(
  createEndpoint<WakaMemberResponse[]>('GET', () => `${global.core.WAKA_BASE_URL}/members`, {
    async mock() {
      return [];
    },
  }),
  (raw) => raw.map(transformRawIntoWakaMember)
);

export const postWakaMember = createEndpoint<void, WakaMemberPostPayload>(
  'POST',
  ({ organization, name, apiKey }) =>
    `${global.core.WAKA_BASE_URL}/${name}?organization=${organization}&apiKey=${apiKey}`,
  { mirror: true }
);

export const updateWakaMemberAPIKey = createEndpoint<void, WakaMemberAPIKeyUpdatePayload>(
  'POST',
  ({ id, apiKey }) => `${global.core.WAKA_BASE_URL}/members/${id}?apiKey=${apiKey}`,
  { mirror: true }
);

const wakas = {
  members: getWakaMembers,
  updateAPIKey: updateWakaMemberAPIKey,
  postMember: postWakaMember,
};

export default wakas;
