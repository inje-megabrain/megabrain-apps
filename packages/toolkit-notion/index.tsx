global.defineMegabrainNotionToolkit = (config) => {
  if (typeof window === 'undefined') {
    global.notion = config;
  }
};

export * from './api';
export * from './types';
