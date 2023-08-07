<template>
  <Transition name="fade" mode="out-in">
    <div v-if="show" class="absolute top-0 left-1/2 z-10">
      <div class="relative flex-center">
        <div
          class="absolute w-2.5 h-2.5 rotate-45 rounded-sm bg-[#1D2C3B]"
        ></div>
      </div>
      <div
        class="tooltip bg-[#1D2C3B] rounded-[10px] px-2 py-1 text-sm leading-130 text-white relative"
      >
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
interface Props {
  show?: boolean
}
defineProps<Props>()
</script>
