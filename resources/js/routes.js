import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

export default{

    mode: 'history',

    linkActiveClass: 'text-black',

    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                darkmode: true,
            },

        },

        {
            path: '/register',
            component: Register,
            meta: {
                darkmode: true,
            },
        },

        {
            path: '/',
            component: Landing,
            meta: {
                darkmode: false,
            },
        },


    ]



}
