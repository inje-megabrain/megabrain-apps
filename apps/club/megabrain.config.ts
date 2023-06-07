import '@megabrain/toolkit-notion';
import { defineConfig } from '@megabrain/core/config';

defineConfig({
  core: {
    WAKA_BASE_URL: process.env.NEXT_PUBLIC_WAKA_API_ENDPOINT,
    SCHEDULE_BASE_URL: process.env.NEXT_PUBLIC_API_ENDPOINT + '/schedules',
    SERVERHEALTH_BASE_URL: process.env.NEXT_PUBLIC_API_ENDPOINT + '',
  },
  notion: {
    SECRET_KEY: process.env.NEXT_PUBLIC_NOTION_SECRET,
    RECRUIT_DB_ID: process.env.NEXT_PUBLIC_NOTION_RECRUIT_DB_ID,
    MEMBER_DB_ID: process.env.NEXT_PUBLIC_NOTION_MEMBER_DB_ID,
    PROJECT_DB_ID: process.env.NEXT_PUBLIC_NOTION_PROJECT_DB_ID,
    VERSION: process.env.NEXT_PUBLIC_NOTION_VERSION,
  },
});
