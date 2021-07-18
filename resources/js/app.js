import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Clipboard from 'v-clipboard';

import store from './store';
import Axios  from 'axios';



Vue.use(VueRouter);
Vue.use(Clipboard);
Vue.component('navbar-component', require('./components/Navbar.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if(token)
{
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
const app = new Vue({
    el: '#app',

    router: new VueRouter(routes)

});
