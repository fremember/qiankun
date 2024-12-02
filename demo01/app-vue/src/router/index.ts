import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login-view',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})