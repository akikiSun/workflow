import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/main.css';
import G6 from '@antv/g6';

new Vue({
    render: h => h(App),
    router,
    G6
}).$mount("#app")