<script setup>
import CommonPrinterProblems from '../raw_html/common_printer_problems.html?raw'
import { onBeforeMount, reactive } from 'vue'
import { useRoute } from 'vue-router' 

const $route = useRoute();
const articles = [
  {
    id: 'common-printer-problems',
    title: 'Most Common Printer Problems and Their Solutions',
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
    let article = articles.find(x => x.id == id)
    if(article){
      Object.assign(currentArticle, article)
    }
  }
})



</script>

<template>
  <div class="w-full h-full">
    <div class="prose prose-xl px-8 mx-auto">
      <div class="">
        <p class="font-bold text-4xl text-black">{{ currentArticle.title }}</p>
      </div>
      <div>
        <div v-html="currentArticle.html"></div>
      </div>
    </div>
  </div>
</template>
