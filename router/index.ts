import { createRouter, createWebHistory } from "vue-router";
import home from "~/pages/home.vue";
import about from "~/pages/about-me.vue";
import skills from "~/pages/skills.vue";
import project from "~/pages/project.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/about",
        name: "about",
        component: about,
    },
    {
        path: "/skills",
        name: "skills",
        component: skills,
    },
    {
        path: "/project",
        name: "project",
        component: project,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;