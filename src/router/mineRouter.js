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