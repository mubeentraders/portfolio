import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import './style.css'
import AppNavigation from './components/AppNavigation.vue'
import AppFooter from './components/AppFooter.vue'
import Home from './components/sections/Index.vue'
import ArticleShow from './components/article/ArticleShow.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/article/:id', component: ArticleShow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp({})

app.use(router)
app.component('app-navigation', AppNavigation)
app.component('app-footer', AppFooter)
app.mount('#app')
