<script setup>
import CommonPrinterProblems from '../raw_html/common_printer_problems.html?raw'
import { onBeforeMount, reactive } from 'vue'
// import { useRoute } from 'vue-router' 

// const $route = useRoute();
// const articles = [
//   {
//     id: 'common-printer-problems',
//     title: 'Most Common Printer Problems and Their Solutions',
//     html: CommonPrinterProblems
//   }
// ]
const currentArticle = reactive({
  title: 'Page Not Found',
  html: ''
})
// onBeforeMount(() => {
//   const id = $route.params.id
//   if(id){
//     let article = articles.find(x => x.id == id)
//     if(article){
//       Object.assign(currentArticle, article)
//     }
//   }
// })



</script>

<template>
  <div class="w-full h-full">
    <div class="prose prose-md px-8 mx-auto">
      <div class="text-center">
        <h2>{{ currentArticle.title }}</h2>
      </div>
      <div>
        <p v-html="currentArticle.html"></p>
      </div>
    </div>
  </div>
</template>
