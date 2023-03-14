import Card from "./index.vue";

export default {
  title: "Molecules/Card",
  component: Card,
  args: {
    image:
      "https://images.travel-cdn.com/image/upload/s--hLMzZv4G--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1526338857/3a68f907d3ef5994e92ec507c2e3b8f526553519?bc5da95f",
    location: "London NW8 7JT England",
    title: "Danubius Hotel Regents Park",
    price: 200,
    rate: 4.8,
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
