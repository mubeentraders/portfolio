<script setup>
import { getArticle } from '../composeables/articles.'
import { onBeforeMount, reactive } from 'vue'
import { useRoute } from 'vue-router' 

const $route = useRoute();
const articles = [
  {
    id: 'common-printer-problems',
    title: 'Most Common Printer Problems and Their Solutions',
    date: 'Nov 04, 2022',
    html: CommonPrinterProblems
  }
]
const currentArticle = reactive({
  title: 'Page Not Found',
  html: '<p>Perhaps you misspelled something?</p>'
})
onBeforeMount(() => {
  const id = $route.params.id
  if(id){
    let article = getArticle(id)
    if(article){
      Object.assign(currentArticle, article)
    }
  }
})



</script>

<template>
  <div class="w-full h-full">
    <div class="prose prose-xl px-8 mx-auto">
      <div class="my-12">
        <p class="font-bold text-4xl text-black my-2">{{ currentArticle.title }}</p>
        <span class="text-gray-600 text-sm" v-if="currentArticle.date">{{ currentArticle.date }} </span>
      </div>
      <div>
        <div v-html="currentArticle.html"></div>
      </div>
    </div>
  </div>
</template>
