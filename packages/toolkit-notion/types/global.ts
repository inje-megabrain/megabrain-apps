export {};

declare global {
  // eslint-disable-next-line
  var notion: MegabrainNotionToolkit;
  // eslint-disable-next-line
  var defineMegabrainNotionToolkit: (config: MegabrainNotionToolkit) => void;
}

interface MegabrainNotionToolkit {
  SECRET_KEY: string;
  WORKSPACE: string;
}
