import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import P5 from './views/P5.vue'
import parallax from './views/parallax.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path: '/p5',
      name: 'p5',
      component: P5
    }
    ,{
      path: '/parallax',
      name: 'parallax',
      component: parallax
    }
  ]
})
