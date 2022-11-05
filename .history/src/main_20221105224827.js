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
  history: createWebHistory('http://127.0.0.1:5174/portfolio/'),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
