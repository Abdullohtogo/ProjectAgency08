<template>
  <button class="transition-all border-2 w-[100px] h-[40px] md:mt-0 mt-1 rounded-[50px] border-solid md:w-[150px] group md:h-[50px] border-pinkRed hover:bg-pinkRed">
    <span class="text-pinkRed group-hover:text-white">
      {{ text }}
    </span>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Button',
  },
})
</script>
