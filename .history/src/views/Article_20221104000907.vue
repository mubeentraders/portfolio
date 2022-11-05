<script setup>
import CommonPrinterProblems from '../raw_html/common_printer_problems.html'
import { onBeforeMount } from 'vue'
import { userRoute } from 'vue-router' 

const $route = useRoute();
const articles = [
  {
    id: 'common-printer-problems',
    title: 'Most Common Printer Problems and Their Solutions',
    html: CommonPrinterProblems
  }
]
const currentArticle = reactive({})
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
  <div class="prose px-8">

    <h1>Details of the article here</h1>
  </div>
</template>
