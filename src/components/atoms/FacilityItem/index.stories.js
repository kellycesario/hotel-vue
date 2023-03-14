import FacilityItem from "./index.vue";
import Svg from "../../ions/Svg/index.vue";

export default {
  title: "Atoms/FacilityItem",
  component: FacilityItem,
  args: {
    icon: "#instagram",
    label: "Restaurant",
    to: "/",
  },
  argTypes: {
    icon: {
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

