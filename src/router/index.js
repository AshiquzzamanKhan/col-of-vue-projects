import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "../views/ProjectList.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";
import Project from "../views/Project.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "ProjectList",
    component: ProjectList
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject
  },
  {
    path: "/edit/:id",
    name: "EditProject",
    component: EditProject,
    props: true
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
