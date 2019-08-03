export default {
    path:'/search',
    component:()=>import('../pages/search/Search/Search'),
    children:[
        {
            //搜索的结果页 需要传关键字
            path:'result/:key',
            component:()=>import('../pages/search/SearchResult/SearchResult'),
        },
        {
            //点击菜单分类 显示的页面，需要传分类的id
            path:'recipe/sort/:sort_id',
            component:()=>import('../pages/search/SearchRecipeItem/Search-recipet-item'),
            children:[
                {
                    //分类页面下的菜单详情,需要传菜单的id
                    path:'detail/:recipe_id',
                    component:()=>import('../pages/search/SearchRecipeItemDetail/Search-recipe-item-detail'),
                }
            ]
        },
        {
            //百科分类下的详情页 需要传id
            path:'wikipedia/:id',
            component:()=>import('../pages/search/SearchWikipediaDetail/Wikipedia-detail')
        },
        {
            //用户详情页 需要传用户id
            path:'userinfo/:id',
            component:()=>import('../pages/search/SearchUserInfo/User-info')
        }

    ]
}