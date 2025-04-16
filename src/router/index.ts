import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../pages/Projects.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/Blog.vue'),
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../pages/Experience.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
