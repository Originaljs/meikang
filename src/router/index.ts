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
    },
    {
        path: '/ventilate',
        name: 'ventilate',
        component: () => import("@/views/VentilateSystem.vue")
    },
    {
        path: '/fan',
        name: 'fan',
        component: () => import("@/views/AirPressure.vue")
    },
    {
        path: '/transport',
        name: 'transport',
        component: () => import("@/views/TransportSystem.vue")
    },
    {
        path: '/drainageSystem',
        name: 'drainageSystem',
        component: () => import("@/views/DrainageSystem.vue")
    },
    {
        path: '/gasExtraction',
        name: 'gasExtraction',
        component: () => import("@/views/GasExtraction.vue")
    },
    {
        path: '/smartMining',
        name: 'smartMining',
        component: () => import("@/views/SmartMining.vue")
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
