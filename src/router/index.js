import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import { component } from 'vue/types/umd'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: '/',
        component: () => import('../views/mainJobs.vue')
      }, {
        path: 'index',
        name: 'index',
        component: () => import('../views/mainJobs.vue')
      }, {
        path: 'reverse',
        name: 'Reverse',
        component: () => import('../views/Reverse.vue')
      }, {
        path: 'imputation',
        name: 'Imputation',
        component: () => import('../views/Imputation.vue')
      }, {
        path: 'fusion',
        name: 'Fusion',
        component: () => import('../views/Fusion.vue')
      },
      {
        path: 'alarm',
        name: 'Alarm',
        component: () => import('../views/Alarm.vue')

      }, {
        path: 'link',
        name: 'Link',
        component: () => import('../components/graph6/linkTree.vue')
      }
    ]
  },
  {
    path: '/general',
    name: 'General',
    component: () => import('../views/general.vue')
  },
  {
    path: '/bigscreen',
    name: 'BigScreen',
    component: () => import('../views/index.vue')
  },
  {
    path: '/reader',
    name: 'ReaderPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/readerlast.vue')
  },
  {
    path: '/compared/:url',
    name: 'Gender',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GenderAge.vue')
  },
  {
    path: '/scatter',
    name: 'GenderAge',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GenderAge.vue')
  },
  {
    path: '/bar',
    name: 'TopFive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TopFive.vue')
  },
  {
    path: '/map',
    name: 'Province',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Province.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
