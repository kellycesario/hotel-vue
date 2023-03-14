import Link from "./index.vue";

export default {
  title: "Atoms/Link",
  component: Link,
  args: {
    label: "Home",
    to: "/home",
  },
  argTypes: {
    to: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
