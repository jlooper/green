import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({});
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
