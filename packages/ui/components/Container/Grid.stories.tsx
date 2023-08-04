import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';
import { Button } from '../Button';
import { Text } from '../Text';

const meta: Meta<typeof Grid> = {
  title: 'Container/Grid',
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

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
