import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@views/ViewHome.vue";
import AboutUs from "@views/ViewAboutUs.vue";
import Contact from "@views/ViewContact.vue";
import Hotels from "@views/ViewHotels.vue";
import HotelDetail from "@views/ViewHotelDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/hotels",
    name: "Hotels",
    component: Hotels,
  },
  {
    path: "/hotels/:id",
    name: "HotelDetail",
    component: HotelDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
