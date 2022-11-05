<template>
  <div
    class="relative w-full flex items-center justify-start text-left bg-cover bg-center"
    style="
      height: 48rem;
      background-image: url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);
    "
  >
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

    <main class="px-10 lg:px-24 z-10">
      <div class="text-left">
        <p class="mb-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">We provide</p>
        <h2
          class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl"
        >
          IT Service
          <span class="text-indigo-600">Solutions</span>
        </h2>
        <p class="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
          Choose us and set the trends for desktop and server virtualization technologies for your Agency
        </p>
        <div class="mt-5 sm:mt-8 sm:flex justify-start">
          <div class="rounded-md shadow">
            <a
              href="#"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              See All Our Services
              <ArrowNarrowRightIcon class="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline';
</script>
