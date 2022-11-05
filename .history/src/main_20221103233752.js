import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';

import './style.css'
import App from './App.vue'
import ArticleShow from './components/article/ArticleShow.vue'

const routes = [
  { path: '/', component: App },
  { path: '/article/:id', component: ArticleShow },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp({})

app.use(router)

app.mount('#app')
