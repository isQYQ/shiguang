export default {
    path:'/mine',
    component:()=>import('../pages/mine/Mine/Mine'),
    children:[
        {
            //右上角的设置页面
            path:'set',
            component:()=>import('../pages/mine/SetOption/Set-option')
        },
        {
            //左上角的消息推送页面
            path:'message',
            component:()=>import('../pages/mine/Message/Message')
        },
        {
            //编辑个人信息 传id
            path:'edit/info/:id',
            component:()=>import('../pages/mine/EditInfo/Edit-info')
        },
        {
            //菜谱书页面
            path:'repice/book',
            component:()=>import('../pages/mine/RecipeBook/Recipe-book')
        }
    ]
}