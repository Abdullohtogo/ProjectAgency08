<template>
  <div class="flex flex-col gap-2">
    <label class="text-gray-200">{{ label }}</label>
    <div
      :class="(inputClass, error ? '!border-red' : '')"
      class="bg-gray-300 rounded-lg transition transition-300 flex sm:gap-2 gap-1 sm:p-3 p-1.5 h-full border border-transparent focus-within:border-green-400"
    >
      <img :src="src" alt="" v-if="src" />
      <span class="text-sm text-black-100 leading-130 translate-y-[1px] font-normal flex items-center">
        <slot />
      </span>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        class="outline-0 bg-transparent w-full caret-green-400 placeholder:text-sm"
        :maxlength="maxlength"
        :placeholder="placeholder"
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
  modelValue: any
  error: boolean
  inputClass: string
}

defineProps<Props>()
</script>
