import Button from "./index.vue";

export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    label: "Button",
  },
  argTypes: {
    isButton: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
