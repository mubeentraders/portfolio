<template>
  <div id="posts" v-motion-slide-visible-once-bottom class="bg-white">
    <section class="max-w-8xl mx-auto container bg-white py-16">
      <div>
        <div class="flex items-center flex-col px-4">
          <h2
            class="text-4xl lg:text-5xl font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 pt-4"
          >
            Our recent posts
          </h2>
          <p class="mt-4 text-lg text-center text-gray-600 leading-normal">Read our recent blog posts to learn more</p>
        </div>
        <div class="my-20 flex justify-center space-x-4 px-4">
          <div
            v-for="(post, idx) in posts"
            :key="idx"
            class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
          >
            <router-link :to="post.id">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-2">
                {{ post.title }}
              </h5>
            </router-link>
            <p class="mb-3 font-normal text-gray-700 line-clamp-4" v-html="post.description">
              
            </p>
            <router-link
              :to="post.id"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-r from-indigo-800 via-indigo-700 to-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { getRecentPosts } from '../../composeables/articles.js'
const posts = getRecentPosts();
</script>
