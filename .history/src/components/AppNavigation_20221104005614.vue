<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="hidden md:block sticky top-0 z-100 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 py-2 px-4">
    <div class="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center space-x-8">
        <a href="mailto:mubeentraders@gmail.com" class="flex items-center space-x-2 text-gray-100">
          <MailIcon class="flex-shrink-0 h-6 w-6" aria-hidden="true" />
          <p class="text-base font-medium">mubeentraders@gmail.com</p>
        </a>
        <div class="flex items-center space-x-2 text-gray-100">
          <LocationMarkerIcon class="flex-shrink-0 h-6 w-6" aria-hidden="true" />
          <p class="text-base font-medium">Main College Road, Township, Lahore</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex items-center space-x-2 text-gray-100">
          <PhoneIcon class="flex-shrink-0 h-6 w-6" aria-hidden="true" />
          <p class="text-base font-medium">+92-321-5667476</p>
        </div>
      </div>
    </div>
  </div>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-center md:justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Mubeen Traders</span>
            <img
              class="h-10 w-auto sm:h-16"
              src="/logo.png"
              alt="mubeen traders logo"
            />
          </a>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                ]"
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        v-for="item in solutions"
                        :key="item.name"
                        :href="item.href"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a
                          :href="item.href"
                          class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                ]"
              >
                <span>More</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                >
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                 
                    <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                        <ul role="list" class="mt-4 space-y-4">
                          <li v-for="post in recentPosts" :key="post.id" class="text-base truncate">
                            <router-link :to="post.id" class="font-medium text-gray-900 hover:text-gray-700">
                              {{ post.title }}
                            </router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-5 text-sm">
                        <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                          View all posts
                          <span aria-hidden="true">&rarr;</span></a
                        > -->
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <a
            href="#contact"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-400 hover:bg-indigo-700"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { getAllArticles } from '../composeables/articles.js'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon, PrinterIcon, DatabaseIcon } from '@heroicons/vue/solid';
import { LocationMarkerIcon, MenuIcon, PhoneIcon, XIcon, DesktopComputerIcon, GlobeAltIcon, VideoCameraIcon, MailIcon } from '@heroicons/vue/outline';

const solutions = [
  {
    name: 'Repairs',
    description: 'Repair all kinds of devices including PC, Laptop, CCTV Cameras.',
    href: '#services',
    icon: DesktopComputerIcon
  },
  {
    name: 'Networking',
    description: "Provide secure and sound networking protocol over local and remote networks.",
    href: '#',
    icon: GlobeAltIcon
  },
  {
    name: 'CCTV Installation',
    description: "Get best quality and highly maintainable CCTV installation for your peace of mind.",
    href: '#',
    icon: VideoCameraIcon
  },
  {
    name: 'Recovery & Maintenance',
    description: 'Loss your data? Get it recovered by professionally trained staff.',
    href: '#',
    icon: DatabaseIcon
  },
  {
    name: 'Troubleshooting',
    description: 'Help identify what is wrong with your equipment. Easily and quickly',
    href: '#',
    icon: PrinterIcon
  }
];
const callsToAction = [
  { name: 'Get in Touch', href: '#', icon: MailIcon },
  { name: '+92-321-5667476', href: '#', icon: PhoneIcon }
];
const recentPosts = getAllArticles();
</script>
