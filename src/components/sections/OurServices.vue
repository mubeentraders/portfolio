<template>
  <div id="services" class="bg-gray-100">
    <section class="max-w-8xl mx-auto container bg-gray-100 pt-16">
      <div>
        <div class="flex flex-col items-center justify-center">
          <h1 class="lg:text-5xl text-3xl font-bold text-center text-gray-800">What we offer</h1>
          <p class="text-base leading-6 mt-4 text-center text-gray-600">
            We provide all kinds of services in form of information & technology
          </p>
        </div>
        <div v-motion-slide-visible-once-left class="mt-20 flex flex-wrap justify-between px-4">
          <div v-for="service in services" :key="service.title" class="flex sm:w-full md:w-5/12 pb-20">
            <div class="w-20 h-20 relative mr-5">
              <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
              <div
                class="absolute text-white bottom-0 left-0 bg-gradient-to-r from-indigo-800 via-indigo-700 to-blue-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"
              >
                <component :is="service.icon" class="w-8 h-8" />
              </div>
            </div>
            <div class="w-10/12">
              <h4 class="text-lg font-bold leading-tight text-gray-800">{{ service.title }}</h4>
              <p class="text-base text-gray-600 leading-normal pt-2">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PrinterIcon, DatabaseIcon } from '@heroicons/vue/solid';
import { DesktopComputerIcon, GlobeAltIcon, VideoCameraIcon, ServerIcon, TemplateIcon } from '@heroicons/vue/outline';
const services = [
  {
    title: 'PC & Laptop Repairs',
    description:
      'In-house repairs of your personal computers and laptops have never been this easy. We deal in all kinds of repairs and services of your PCs and Laptops need.',
    icon: DesktopComputerIcon
  },
  {
    title: 'Printer Repair & Troubleshooting',
    description:
      "Having troubles with your printers? Don't know how to set it up for your organization? Worry no more, just give us a call.",
    icon: PrinterIcon
  },
  {
    title: 'Network Infrastructure Setup',
    description:
      'We realize that setting up networking through out your organization can be troublesome. Our team of experts team will have you up and running in no time.',
    icon: GlobeAltIcon
  },
  {
    title: 'CCTV Installation and Maintenance',
    description:
      'Security is an important aspect of any organization. We realize that and our porfessional team takes care of all aspects of setting up a secure CCTV network.',
    icon: VideoCameraIcon
  },
  {
    title: 'Servers Setup',
    description:
      'Running up an IT firm and in need of someone to setup in-house servers for you? Well look no further, we are just one phone call away.',
    icon: ServerIcon
  },
  {
    title: 'Data Recovery and Restoration',
    description:
      "Accidentally lost your data and don't know what to do? Give us a call we try our best to recover your valueable data.",
    icon: DatabaseIcon
  }
];
</script>
