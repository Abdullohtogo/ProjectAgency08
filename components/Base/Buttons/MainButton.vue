<template>
  <button class="transition-all border-2 mx-auto rounded-[50px] border-solid w-[100px] h-[50px] md:w-[150px] group md:h-[50px] border-pink bg-pink hover:bg-white md:text-[16px] text-[14px] z-30">
    <span class="group-hover:text-pink text-white">
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
