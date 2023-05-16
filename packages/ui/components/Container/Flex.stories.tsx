import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';
import { Button } from '../Button';
import { Text } from '../Text';

const meta: Meta<typeof Flex> = {
  title: 'Container/Flex',
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Button>안녕하세요</Button>
        <Text>방갑습니다.</Text>
        <Button>3</Button>
        <Text>4</Text>
      </>
    ),
  },
};
