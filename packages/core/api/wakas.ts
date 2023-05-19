import { WakaMetadata } from '../types';
import { createEndpoint } from './base';

export const getWakaMetadata = createEndpoint<WakaMetadata[]>('GET', () => ``, {
  async mock() {
    return [];
  },
});

const wakas = {
  metadata: getWakaMetadata,
};

export default wakas;
