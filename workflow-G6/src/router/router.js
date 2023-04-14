import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// src\views\index.vue
const routes = [{
    path: "/workflow",
    name: "workflow",
    component: () =>
        import ("@/views/index"),
    meta: {
        title: "流程图"
    }
}]

export default new Router({
    routes
})