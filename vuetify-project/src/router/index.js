// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Padre.vue'),
    meta: {titulo: "Prueba Props"},
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next)=>{
  document.title = to.meta.titulo || "Default Title";
  next();
})


export default router
