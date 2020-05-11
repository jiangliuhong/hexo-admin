// 左侧菜单数据
const menus = [
    {
        key: 'index',
        name: '仪表盘',
        icon: 'el-icon-menu',
        children:[]
    },{
        key: 'article',
        icon: 'el-icon-location',
        name: '文章管理',
        children:[
            {
                key: 'article/list',
                name: '文章列表'
            },{
                key: 'article/new',
                name: '发布文章'
            }
        ]
    },{
        name: '评论管理'
    },{
        name: '统计分析'
    }
];

export default menus;