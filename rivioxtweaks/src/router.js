import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Docs from './views/Docs.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/docs', component: Docs },
  ],
});

export default router;
