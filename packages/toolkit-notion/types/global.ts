export {};

declare global {
  // eslint-disable-next-line
  var notion: MegabrainNotionToolkit;
  // eslint-disable-next-line
  var defineMegabrainNotionToolkit: (config: MegabrainNotionToolkit) => void;
}

interface MegabrainNotionToolkit {
  SECRET_KEY: string;
  RECRUIT_DB_ID: string;
  MEMBER_DB_ID: string;
  VERSION: string;
}
