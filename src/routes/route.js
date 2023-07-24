import Home from '../components/Home'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import AddRestaurant from '../components/AddRestaurant'
import UpdateRestaurant from '../components/UpdateRestaurant'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:"Home",
        path:"/",
        component:Home,

    },
    {
        name:"SignUp",
        path:"/SignUp",
        component:SignUp,

    },
    {
        name:"Login",
        path:"/Login",
        component:Login,

    },
    {
        name:"AddRestaurant",
        path:"/AddRestaurant",
        component:AddRestaurant,

    },    
    {
        name:"UpdateRestaurant",
        path:"/UpdateRestaurant/:id",
        component:UpdateRestaurant,

    },
   

]

const router=createRouter({history:createWebHistory(),routes})

export default router