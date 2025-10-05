import {defineStore} from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        token: null,
        roles: [],
        user: "",
        menu: [],
    }),
    actions: {
    }
})
