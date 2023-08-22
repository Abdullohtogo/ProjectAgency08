<template>
  <div
    class="bg-[#FCFCFC] justify-end pl-3 pr-2 py-[6px] rounded-lg flex w-full overflow-hidden items-center relative border border-gray-600"
  >
    <p
      class="leading-130 absolute md:text-lg sm:text-base text-sm bg-transparent text-[#181919] outline-none overflow-hidden w-[90%] h-4 sm:h-6 left-3 select-none"
    >
      {{ currentRoute }}
    </p>
    <input
      ref="clone"
      readonly
      v-model="link"
      class="w-[236px] font-semibold text-lg absolute left-[-400px] leading-130 opacity-0"
      @focusin="onFocus"
    />
    <span class="linear-bg absolute right-0 h-10 w-20 top-0"></span>
    <span
      @click="copy"
      class="bg-[#27a44a1a] z-10 w-[28px] h-[28px] rounded-[4px] mr-1.5 shrink-0 relative flex items-center justify-center icon-copy text-base leading-[24px] text-green-400 cursor-pointer md:hover:opacity-80 transition-all duration-300"
    >
      <UITooltip :show="showTooltip">{{ $t('copied') }}</UITooltip>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const link = window.location.href
const route = useRoute()
route.fullPath
const clone = ref()
const showTooltip = ref(false)
const copy: any = () => {
  clone.value.focus()
  showTooltip.value = true
  document.execCommand('copy')
  setTimeout(() => {
    showTooltip.value = false
  }, 1000)
}
function onFocus(e: any) {
  e.target.select()
}
// eslint-disable-next-line vue/return-in-computed-property
const currentRoute = computed(() => {
  if (window.location.href.length > 25) {
    return window.location.href
  }
})
</script>

<style>
.linear-bg {
  background: linear-gradient(
    270deg,
    #fcfcfc 0%,
    rgba(252, 252, 252, 0.9) 50%,
    rgba(252, 252, 252, 0) 150%
  );
}
</style>
