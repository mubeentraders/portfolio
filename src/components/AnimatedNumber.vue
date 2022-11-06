<template>
  <span ref="target" class="">
    {{ number }}
  </span>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  number: { type: Number, default: 0 }
})

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
  if(targetIsVisible){
    playAnimation();
  }
})
</script>