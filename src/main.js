import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'

export function createApp() {
  const appRoot = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { appRoot, router }
}