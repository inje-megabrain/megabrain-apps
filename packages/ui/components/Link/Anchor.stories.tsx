import type { Meta, StoryObj } from '@storybook/react';

import { Anchor } from './Anchor';

const meta: Meta<typeof Anchor> = {
  title: 'Anchor',
  component: Anchor,
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Primary: Story = {
  render: () => <Anchor />,
};
