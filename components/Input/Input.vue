<template>
  <div class="flex flex-col gap-2">
    <label for="" class="text-gray-200">{{ label }}</label>
    <div class="bg-gray-300 rounded-lg flex gap-2 p-3 h-full border border-transparent focus-within:border-green-400">
      <img :src="src" alt="">
      <span>
        <slot/>
      </span>
      <input :type="type" name="" id="" class="outline-0 bg-transparent w-full caret-green-400" :maxlength="maxlength"
             :placeholder="placeholder"/>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  label: string,
  placeholder: string
  src: string,
  type: string
  maxlength: number
}

defineProps<Props>()
</script>