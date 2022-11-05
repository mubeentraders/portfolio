<template>
  <div class="pt-12 bg-gray-100">
    <footer id="footer" class="relative z-50 pt-24">
      <div
          class="border-t border-b border-gray-200  py-16"
      >
        <div class="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div class="lg:flex">
            <div class="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div class="w-full lg:w-1/2 px-6">
                <ul>
                  <li v-for="(item, idx) in column1" :key="item.link" :class="idx > 0 ? 'mt-6' : ''">
                    <a
                      class="text-xs lg:text-sm leading-none hover:text-brand text-gray-800 "
                      :href="item.link"
                    >
                    {{ item.text }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-1/2 px-6">
                <ul>
                  <li v-for="(item, idx) in column2" :key="item.link" :class="idx > 0 ? 'mt-6' : ''">
                    <a
                      class="text-xs lg:text-sm leading-none hover:text-brand text-gray-800 "
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
                <ul>
                  <li v-for="(blog, idx) in blogs" :key="blog.id" :class="idx > 0 ? 'mt-6' : ''">
                    <router-link
                      href="javascript:void(0)"
                      class="text-xs lg:text-sm leading-none hover:text-brand text-gray-800 "
                      >
                      {{ blog.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
                <div
                    class="w-full lg:w-1/2 px-6 flex flex-col justify-between"
                >
                    <div class="flex items-center mb-6">
                        <a href="javascript:void(0)">
                            <div
                                class="text-gray-800  cursor-pointer hover:text-brand
                                "
                            >
                                <svg
                                    class="footer-icon feather feather-github"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    />
                                </svg>
                            </div>
                        </a>
                        <a href="javascript:void(0)">
                            <div class="pl-4">
                                <svg
                                    class="footer-icon feather feather-twitter text-gray-800  cursor-pointer hover:text-brand"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-16 flex flex-col justify-center items-center">
        <a href="#">
           <img
              class="h-12 w-auto sm:h-20"
              src="/logo.png"
              alt="mubeen traders logo"
            />
        </a>
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
const blogs = getAllArticles();
</script>