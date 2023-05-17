import { createEndpoint } from './base';

export const pingSystem = createEndpoint('GET', () => `/ping`, {
  async mock() {
    return 'hello';
  },
});

const systems = {
  ping: pingSystem,
};

export default systems;
