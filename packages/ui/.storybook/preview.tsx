import React from 'react';
import type { Preview } from '@storybook/react';
import { globalStyles } from '@megabrain/ui/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      globalStyles();

      return <Story />;
    },
  ],
};

export default preview;
