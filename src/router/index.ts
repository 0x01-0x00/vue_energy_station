import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router/basicRouteMap.ts";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
