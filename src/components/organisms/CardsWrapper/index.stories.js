import CardsWrapper from "./index.vue";

export default {
  title: "Organisms/CardsWrapper",
  component: CardsWrapper,
  args: {
    title: "Our most popular Hotels",
    startIndex: 0,
    endIndex: 9,
  },
  argTypes: {
    text: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
