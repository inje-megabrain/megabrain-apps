import { createEndpoint } from './base';
import { ServerHealthResponse } from '../types/health';

export const getServerHealth = createEndpoint<ServerHealthResponse>(
  'GET',
  () => `${global.core.SERVERHEALTH_BASE_URL}/api/server/health`
);

export const serverhealth = {
  server: getServerHealth,
};

export default serverhealth;
