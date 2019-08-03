import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import home from './homeRouter'
import search from './searchRouter'
import article from './articleRouter'
import mine from './mineRouter'
import login from './loginRouter'

const routes = [
    home,search,article,mine,login,
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/404',
        component:()=>import('../pages/common/Notfind/Not-find')
    }
]

export default new Router({
    mode:'history',
    routes
})