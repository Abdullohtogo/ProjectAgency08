<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" for="" class="text-gray-200">{{ $t(label) }}</label>
    <div class="bg-gray-300 rounded-xl flex gap-2 px-[9px] py-2 h-full">
      <img :src="src" alt="" />
      <span>
        <slot />
      </span>
      <input
        :type="type"
        name=""
        id=""
        class="outline-0 text-gray-700 text-base bg-transparent w-full"
        :maxlength="maxlength"
        :placeholder="$t(placeholder)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  label: string
  placeholder: string
  src: string
  type: string
  maxlength: number
}

defineProps<Props>()
</script>
