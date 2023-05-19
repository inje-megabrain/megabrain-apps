import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    menuItems: [
      {
        href: '/1',
        label: '메뉴1',
        children: [
          { href: '/1-1', label: '메뉴1-1' },
          { href: '/1-2', label: '메뉴1-2' },
          { href: '/1-3', label: '메뉴1-3' },
        ],
      },
      { href: '/2', label: '메뉴2' },
      {
        href: '/3',
        label: '메뉴3',
        children: [
          { href: '/1-1', label: '메뉴3-1' },
          { href: '/1-2', label: '메뉴3-2' },
        ],
      },
    ],
    onHrefClick: (href) => {
      alert(href);
    },
  },
};
