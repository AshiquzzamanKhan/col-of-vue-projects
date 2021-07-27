import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import Event from "../views/Event.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/events/:id",
    name: "Event",
    params: true,
    component: Event
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
