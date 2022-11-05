import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArticleShow from './components/article/ArticleShow.vue'

const routes = [
  { path: '/', component: App },
  { path: '/article/:id', component: ArticleShow },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp({})

app.use(router)

app.mount('#app')
