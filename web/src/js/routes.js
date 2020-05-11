// 路由信息
import Layout from '@/layout'
const ConstantRoutes = [
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

export default ConstantRoutes
