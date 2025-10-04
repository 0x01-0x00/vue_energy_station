import {createRouter, createWebHistory} from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routers:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router
