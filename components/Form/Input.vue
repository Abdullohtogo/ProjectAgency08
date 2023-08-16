<template>
  <div
    class="bg-gray-300 border border-transparent transition transition-300 focus-within:border-green-400 focus-within:bg-transparent flex items-center rounded-lg"
    :class="{ '!border-red !bg-red/5': error }"
  >
    <slot name="prefix" />
    <input
      ref="Input"
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        readonly,
        autocomplete,
        id,
      }"
      class="w-full h-full !outline-none !text-base sm:text-sm p-3 text-dark bg-transparent placeholder:text-gray"
      :value="modelValue"
      :class="[inputClass]"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
      type="text"
    />
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  type?: string
  placeholder?: string
  modelValue: number | string
  disabled?: boolean
  error?: boolean
  focus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  inputClass?: string | string[]
  prefixClass?: string
  suffixClass?: string
  autocomplete?: string
  id?: string
  readonly?: boolean
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur'): void
  (e: 'focusout'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()

const handleInput = (e: { target: HTMLInputElement }) => {
  emit('update:modelValue', e.target.value)
}
const handleEnter = () => {
  emit('enter')
}
const Input = ref()
defineExpose({ Input })

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  maxlength: 99,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: 'new-password',
})

const handleFocus = () => {
  emit('focus')
}
watch(
  () => props?.focus,
  (value) => {
    if (value) {
      Input?.value?.focus()
    }
  },
  { deep: true, immediate: true }
)
</script>
<style scoped>
input[type='text'] {
  font-size: 16px !important;
}
</style>
