<template>
  <div
    class="bg-gray-100 rounded border border-transparent transition-300 focus-within:border-green-400 flex flex-col items-end justify-between rounded"
    :class="{ '!border-red ': error }"
  >
    <textarea
      v-bind="{ type, placeholder, maxlength, minlength, rows }"
      :id="id"
      v-model="inputValue"
      class="w-full h-full text-base sm:text-sm p-3 text-dark bg-transparent outline-none placeholder:text-gray resize-none"
      :class="inputClass"
      rows="5"
      @blur="$emit('blur', $event)"
      @input="handleInput"
    />
    <span v-if="maxlength" class="text-[#C6CFD7] text-xs mb-1 mr-2 mt-0.5">
      {{ inputValue.length }} / {{ maxlength }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { type TClassName } from '~/types/common'
import { type TInputTypes } from '~/types/components/input'

interface Props {
  inputClass?: TClassName
  type?: TInputTypes
  placeholder?: string
  error?: boolean
  id?: string
  modelValue?: string
  maxlength?: number | string
  minlength?: number | string
  rows?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  inputClass: '',
  type: 'text',
  placeholder: '',
  maxlength: '',
  minlength: '',
  rows: 5,
})

interface Emits {
  (e: 'blur', v: Event): void
  (e: 'update:modelValue', v: string): void
}
const emit = defineEmits<Emits>()

watch(
  () => props.modelValue,
  (v) => {
    inputValue.value = v || ''
  }
)

const inputValue = ref<string>(props.modelValue || '')

function handleInput() {
  emit('update:modelValue', inputValue.value)
}
</script>
