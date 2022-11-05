import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Article from './'

const routes = [
  { path: '/', component: App },
  { path: '/article/:id', component: Article },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp({})

app.use(router)

app.mount('#app')
