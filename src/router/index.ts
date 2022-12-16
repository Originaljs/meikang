import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        component: () => import("@/views/guiDance.vue"),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("@/views/homePage.vue")
    }
]

const routers = createRouter({
    history: createWebHashHistory(),
    routes,
})
routers.beforeEach((to, from, next) => {
    next();
});

export default routers
