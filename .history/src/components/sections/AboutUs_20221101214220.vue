<template>
  <div id="#about_us" class="overflow-y-hidden bg-gray-100">
    <div class="2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p class="font-semibold leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2 text-left">
        About Us
      </p>
      <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div class="w-full lg:w-6/12">
          <h2 class="text-gray-900 w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 text-left">
            Our main goal is to provide solutions to all of your IT related issues
          </h2>
          <p class="font-normal text-base leading-6 text-gray-600 mt-6 text-left">
            At Mubeen Traders, we provide you with solutions to all of your IT related issues. Our services range from
            repairing equipments ( PCs, Laptops, Printers, Hard Drives & more ), providing networking solutions, and
            installing equipments like Servers and CCTV. We make sure that all of your needs are met under one single
            roof. We are only one call away
          </p>
        </div>
        <div class="w-full lg:w-6/12">
          <img
            class="lg:block hidden w-full"
            src="/wires.jpg"
            alt="people discussing on board"
          />
          <img
            class="lg:hidden sm:block hidden w-full"
            src="/wires.jpg"
            alt="people discussing on board"
          />
          <img
            class="sm:hidden block w-full"
            src="/wires.jpg"
            alt="people discussing on board"
          />
        </div>
      </div>

      <div class="relative mt-24">
        <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div class="z-20 w-12 rounded-full flex justify-center items-center">
            <ClockIcon class=" w-12 h-12text-gray-800" />
          </div>
          <div class="z-20 w-12 rounded-full flex justify-center items-center">
            <BadgeCheckIcon class="text-gray-800 h-12 w-12" />
          </div>
          <!-- <img
            class="z-20 sm:block hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
            alt="users"
          /> -->
        </div>
        <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6 text-left">
            24/7 Support
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 mt-6 text-left">
            We believe time is of the essence. Our highly trained technical resources are always available, so all your needs are met on time.
          </p>
        </div>
        <div>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6 text-left">
            100% Satisfaction
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 mt-6 text-left">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
        </div>
      </div>
      <div class="sm:hidden block relative mt-8">
        <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="user" />
        </div>
        <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6 text-left">400k User</p>
          <p class="font-normal text-base leading-6 text-gray-600 mt-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
        </div>
      </div>

      <div class="container mx-auto pt-16">
        <!-- <div class="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
          <h1 class="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
            Partnerships with Coveted Brands
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
            Our success has come from being committed to the property and investing in the development of the product to
            maximize sales. At the same time and maintaining the integrity.
          </p>
        </div> -->
        <div class="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center"
          >
            <img class="h-36 grayscale" src="/ministry_of_fa.png" alt="ministry of foreign affairs" />
          </div>
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center"
          >
            <img class="h-36 grayscale" src="/zxmco.png" alt="zxmco bikes" />
          </div>
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center"
          >
            <img class="grayscale" src="/jolta_electric.png" alt="jolta electric" />
          </div>
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center"
          >
            <img class="h-36 grayscale" src="/spirit_school.png" alt="spirit school" />
          </div>
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center"
          >
            <img class="h-36 grayscale" src="/punjab_university.png" alt="punjab university" />
          </div>
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center"
          >
            <img class="grayscale" src="/aabroo.png" alt="aabroo educational welfare org" />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <img class="grayscale" src="/monsalwa.png" alt="mon salwa" />
          </div>
          <div
            class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16"
          >
            <img class="h-36 grayscale" src="/lhr_general_hospital.png" alt="lahore general hospital" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ClockIcon, BadgeCheckIcon } from '@heroicons/vue/outline';
</script>

<style></style>
