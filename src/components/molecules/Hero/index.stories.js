import Hero from "./index.vue";
import banner from "/images/hero-banner.png";

export default {
  title: "Molecules/Hero",
  component: Hero,
  args: {
    title: "Find your perfect place to stay",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: banner,
    video: "https://www.youtube.com/watch?v=09839DpTctU&ab_channel=Eagles",
  },
  argTypes: {
    video: {
      table: {
        disable: true,
      },
    },
    image: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
