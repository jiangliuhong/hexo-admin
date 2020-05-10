import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        hidden: true,
        children: [
            {
                path: 'index',
                name: '首页',
                component: () => import('@/pages/index/index.vue')
            }
        ]
    },
    {
        path: '/article',
        component: Layout,
        redirect: '/article/list',
        hidden: true,
        children: [
            {
                path: 'list',
                name: '文章列表',
                component: () => import('@/pages/article/list/index.vue')
            }
        ]
    }
];

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
