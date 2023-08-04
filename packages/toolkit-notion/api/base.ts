import { Client } from '@notionhq/client';

const getNotionClient = () => {
  if (global.notion) {
    return new Client({
      auth: global.notion.SECRET_KEY,
      notionVersion: global.notion.VERSION,
    });
  }
};

export const notionClient = getNotionClient();
