import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: ()=>import('@/containers/home')
    },
    {
      path: '/login',
      component: ()=>import('@/containers/login')
    },
    {
      path: '/home',
      redirect: '/home/first',
      component: ()=>import('@/containers/home'),
      children:[
        {
          path: '/home/first',
          component: ()=>import('@/containers/home/first')
        },
        {
          path: '/home/car',
          component: ()=>import('@/containers/home/car')
        },
        {
          path: '/home/mine',
          component: ()=>import('@/containers/home/mine')
        }
      ]
    }
  ]
})
