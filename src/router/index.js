import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import blogtwo from '@/components/blogtwo'
import details from '@/components/details'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'blog',
    component: blog
  },
  {
    path: '/',
    name: 'blogtwo',
    component: blogtwo
  },
  {
    path: '/details/:Pid',
    name: 'details',
    component: details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeResolve((to, from, next) => {

  NProgress.configure({ parent: '#progressbox' });
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
    NProgress.configure({ easing: 'ease', speed: 2500 });
    NProgress.configure({ trickle: false });
    NProgress.configure({ trickleSpeed: 300 });
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})



export default router