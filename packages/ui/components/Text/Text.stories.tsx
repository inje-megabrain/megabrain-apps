import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: '하나 이상의 문자만 입력해주세요',
  },
};
