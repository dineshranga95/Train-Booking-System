import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/Home.vue'
import Booking from './components/Booking.vue'
import register from './components/register.vue'
import login from './components/login.vue'
import About from './components/about.vue'
const router = new VueRouter({
    mode:'history',
    routes:[  
        { path:"/", component:Home},   
        { path:"/home", component:Home},    
        { path:"/booking", component:Booking},
        { path:"/register", component:register},
        { path:"/login", component:login},
        { path:"/about", component:About},
    ]
});

export default router