import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        component: () => import("@/views/guiDance.vue"),
    },
]

const routers = createRouter({
    history: createWebHashHistory(),
    routes,
})
routers.beforeEach((to, from, next) => {
    next();
});

export default routers
