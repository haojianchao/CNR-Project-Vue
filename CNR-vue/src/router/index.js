import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/index.vue'
import HomeHeader from '@/components/home/header/index.vue'
import Products from '@/components/products/index.vue'
import ProductsHeader from '@/components/products/header/index.vue'
import User from '@/components/user/index.vue'
import UserHeader from '@/components/user/header/index.vue'
import NoLogin from '@/components/user/nologin/index.vue'
import Loging from '@/components/user/loging/index.vue'
import Register from '@/components/register/index.vue'
//import RegisterHeader from '@/components/register/header/index.vue'
import Login from '@/components/login/index.vue'
//import LoginHeader from '@/components/login/header/index.vue'

Vue.use(Router)

const routes = [
	{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        components: {
            header: HomeHeader,
            content: Home
        }
    },
    {
        path: '/products',
        components: {
            header: ProductsHeader,
            content: Products
        }
    },
    {
        path: '/user',
        components: {
            header: UserHeader,
            content: User
        },
        children: [
            {
                path: '',
                redirect: 'nologin'
            },
            {
                path: 'nologin',
                component: NoLogin
            },
            {
                path: 'loging',
                component: Loging
            }
        ]
    },
    {
        path: '/register',
        components: {
//          header: RegisterHeader,
            content: Register
        }
    },
    {
        path: '/login',
        components: {
//          header: LoginHeader,
            content: Login
        }
    }
]

const router = new Router({
    routes
});

export default router;
