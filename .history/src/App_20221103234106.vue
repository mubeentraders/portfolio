<script setup>
import Navigation from './components/Navigation.vue'
import Hero from './components/sections/Hero.vue'
import AboutUs from './components/sections/AboutUs.vue'
import Stats from './components/sections/Stats.vue'
import OurServices from './components/sections/OurServices.vue'
import Testimonials from './components/sections/Testimonials.vue'
import OurTeam from './components/sections/OurTeam.vue'
import RecentPosts from './components/sections/RecentPosts.vue'
import Contact from './components/sections/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation/>
  <router-view/>
  <Footer/>
</template>
