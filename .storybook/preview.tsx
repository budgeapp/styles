import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import React from "react";
import { theme } from "../src";

const preview: Preview = {
  decorators: [
    (renderStory) => (
      <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
