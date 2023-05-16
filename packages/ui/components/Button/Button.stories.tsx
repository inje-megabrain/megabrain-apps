import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { X } from 'react-feather';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    icon: <X />,
    children: '버튼입니다',
    onClick() {
      alert('안녕하세요');
    },
  },
};
