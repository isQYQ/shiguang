export default {
    path:'/article',
    component:()=>import('../pages/article/Article/Article'),
    children:[
        {
            //文章详情页,需要传文章的id
            path:'detail/:id',
            component:()=>import('../pages/article/ArticleDetail/Article-detail')
        }
    ]
}