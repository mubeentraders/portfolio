<template>
  <div class="pt-12 bg-gradient-tor from-gray-400 to-gray-200">
    <footer id="footer" class="relative z-50 pt-24">
      <div
          class="border-t border-b border-gray-200  py-16"
      >
        <div class="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div class="lg:flex">
            <div class="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div class="w-full lg:w-1/2 px-6">
                <ul v-motion-slide-visible-once-bottom>
                  <li v-for="(item, idx) in column1" :key="item.link" :class="idx > 0 ? 'mt-6' : ''">
                    <a
                      class="text-xs lg:text-sm leading-none hover:text-indigo-800 text-gray-800 "
                      :href="item.link"
                    >
                    {{ item.text }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-1/2 px-6">
                <ul v-motion-slide-visible-once-bottom>
                  <li v-for="(item, idx) in column2" :key="item.link" :class="idx > 0 ? 'mt-6' : ''">
                    <a
                      class="text-xs lg:text-sm leading-none hover:text-indigo-800 text-gray-800 "
                      href="javascript:void(0)"
                      >
                      {{ item.text }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full lg:w-1/2 flex">
              <div class="w-full lg:w-1/2 px-6">
                <ul v-motion-slide-visible-once-bottom>
                  <li v-for="(blog, idx) in blogs" :key="blog.id" :class="idx > 0 ? 'mt-6' : ''">
                    <router-link
                      :to="blog.id"
                      class="text-xs lg:text-sm leading-none hover:text-indigo-800 text-gray-800 "
                      >
                      {{ blog.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-16 flex flex-col justify-center items-center">
        <router-link to="/">
           <img
              class="h-12 w-auto sm:h-20"
              src="/logo.png"
              alt="mubeen traders logo"
            />
        </router-link>
        <p
          class="mt-6 text-xs lg:text-sm leading-none text-gray-900 "
        >
          {{ new Date().getFullYear() }} Mubeen Traders IT Solutions.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { getAllArticles } from "../composeables/articles.js"
const column1 = [
  { text: 'What We Do', link: '#what_we_do'},
  { text: 'About Us', link: '#about_us'},
  { text: 'At a Glance', link: '#stats'},
  { text: 'Our Services', link: '#services'},
  { text: 'Testimonials', link: '#testimonials'}
]
const column2 = [
  { text: 'Our Team', link: '#team'},
  { text: 'Posts', link: '#posts'},
  { text: 'Contact', link: '#contact'}
]
const blogs = getAllArticles() || [];
</script>