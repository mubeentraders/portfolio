import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import './style.css'
import App from './App.vue'
import ArticleShow from './components/article/ArticleShow.vue'

const routes = [
  { path: '/', component: ArticleShow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp({})

app.use(router)

app.mount('#app')
