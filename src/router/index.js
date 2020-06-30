import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lineChart',
    name: 'lineChart',
    component: () => import(/* webpackChunkName: "about" */ '../views/g2/LineChart/base.vue')
  },
  {
    path: '/g2lineChart',
    name: 'g2lineChart',
    component: () => import(/* webpackChunkName: "about" */ '../views/g2plot/lineChart/base.vue')
  },
  {
    path: '/g2mutlineChart',
    name: 'g2mutlineChart',
    component: () => import(/* webpackChunkName: "about" */ '../views/g2plot/lineChart/mutline.vue')
  },
  {
    path: '/g2stepline',
    name: 'g2stepline',
    component: () => import(/* webpackChunkName: "about" */ '../views/g2plot/StepLine/basestepline.vue')
  },
  {
    path: '/g2bar',
    name: 'g2bar',
    component: () => import(/* webpackChunkName: "about" */ '../views/g2plot/chart/base.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
