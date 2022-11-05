import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Article from './views/Article.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/article/:id', component: Article },
]

const router = createRouter({
  base: '/portfolio/',
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
