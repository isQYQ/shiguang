export default {
    path:'/home',
    component:()=>import('../pages/home/Home/home'),
    children:[
        {
            //菜单详情页,需要传菜单的id
            path:'recipe/detail/:id',
            component:()=>import('../pages/home/HomeRecipeDetail/Home-recipe-detail')
        }
    ]
}