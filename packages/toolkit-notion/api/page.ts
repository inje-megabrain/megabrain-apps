import { notionClient } from './base';

const getRawPage = async (pageId: string) =>
  notionClient ? await notionClient.pages.retrieve({ page_id: pageId }) : null;

const getBlocks = async (blockId: string) =>
  notionClient
    ? await notionClient.blocks.children
        .list({ block_id: blockId, page_size: 50 })
        .then((res) => res.results)
    : null;
export const page = { get: getRawPage, blocks: getBlocks };
