import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Docs from './views/Docs.vue';
import Screenshots from './views/Screenshots.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/docs', component: Docs },
    { path: '/screenshots', component: Screenshots }
  ],
});

export default router;
