<template>
  <div id="contact" class="bg-gray-200">
    <div class="container mx-auto py-16">
      <div class="lg:flex">
        <div class="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 class="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
            <p class="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
              Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to
              say Hi? Just contact us. We are here to asset you.
            </p>
            <div class="flex pb-4 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-phone-call"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1"
                  />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <p class="pl-4 text-white text-base">+92-321-5667476</p>
            </div>
            <div class="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <p class="pl-4 text-white text-base">mubeen@traders.com</p>
            </div>
            <p class="text-lg text-white pt-10 tracking-wide">
              Main College Roard
              <br />
              Township, Lahore
            </p>
          </div>
        </div>
        <div class="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" ref="form" class="bg-white py-4 px-8 rounded-tr rounded-br" @submit.prevent="sendEmail">
            <h1 class="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
            <div class="block xl:flex w-full justify-between mb-6 md:space-x-4">
              <div class="w-2/4 mb-6 xl:mb-0">
                <div class="flex flex-col">
                  <label for="full_name" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    id="full_name"
                    name="name"
                    type="text"
                    class="focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="w-2/4 xl:justify-end">
                <div class="flex flex-col">
                  <label for="email" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    class="focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="flex w-full flex-wrap">
              <div class="w-2/4">
                <div class="flex flex-col">
                  <label for="phone" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Phone
                  </label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    class="focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="w-full mt-6">
              <div class="flex flex-col">
                <label class="text-sm font-semibold text-gray-800 mb-2" for="message">Message</label>
                <textarea
                  required
                  placeholder=""
                  name="message"
                  class="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
              <button
                v-if="!requestSuccessful"
                type="submit"
                :class="{'cursor-not-allowed pointer-events-none' : busy }"
                class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Send Message
              </button>
              <span v-if="requestSuccessful || requestFailed" 
                :class="[requestSuccessful ? 'text-green-500': 'text-red-500']" 
                class="text-sm font-semibold leading-5">
                {{ message }}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import emailjs from '@emailjs/browser';
import { ref, onMounted } from 'vue'

const form = ref(null)
const busy = ref(false)
const message = ref('Your message has been successfully sent.')
const requestSuccessful = ref(false)
const requestFailed = ref(false)
function sendEmail() {
  if(!busy.value){
    busy.value = true
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY)
      .then(
        (result) => {
          requestSuccessful.value = true
          console.log('SUCCESS!', result.text);
      },
        (error) => {
          requestFailed.value = true
          message.value = "Something unexpected happened. Try again later."
          console.log('FAILED...', error.text);
      }).finally(() => {
        busy.value = false
      });
  }
}
</script>