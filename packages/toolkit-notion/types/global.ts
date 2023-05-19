export {};

declare global {
  // eslint-disable-next-line
  var notion: {
    SECRET_KEY: string;
    RECRUIT_DB_ID: string;
    MEMBER_DB_ID: string;
    VERSION: string;
  };
}
