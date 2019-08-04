export default {
    path:'/login',
    component:()=>import('../pages/login/Login/login'),
    children:[
        {
            //确认登陆信息页
            path:'confirm',
            component:()=>import('../pages/login/Confirm/Confirm')
        }
    ]
}