import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Container/Base',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  args: {},
};
