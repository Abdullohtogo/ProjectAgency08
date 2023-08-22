<template>
  <div
    class="bg-[#FCFCFC] rounded-lg flex w-full items-center justify-between border border-gray-600"
  >
    <p
      class="leading-130 md:text-lg sm:text-base text-sm bg-transparent text-[#181919] outline-none px-3 py-[11px] overflow-hidden h-[45.5px] select-none"
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
    <span
      @click="copy"
      class="bg-[#27a44a1a] w-[28px] h-[28px] rounded-[4px] mr-1.5 shrink-0 relative flex items-center justify-center icon-copy text-base leading-[24px] text-green-400 cursor-pointer md:hover:opacity-80 transition-all duration-300"
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
