import Vue from 'vue'
import Router from 'vue-router'

// import modules
import homeRoutes from './modules/Home/router'
import helloSeedingRoutes from './modules/HelloSeeding/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...homeRoutes,
    ...helloSeedingRoutes
  ]
})