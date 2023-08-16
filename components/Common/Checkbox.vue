<template>
  <label
    class="group inline-flex items-center relative select-none min-h-[20px]"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
  >
    <input
      v-bind="{ disabled }"
      type="checkbox"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      :checked="modelValue"
      :value="value"
      :name="name"
      @change="handleChange"
    />
    <span
      class="n-transition transition bg-[#F6F7F5] transition-300 absolute top-3 peer-checked:bg-green-300 peer-checked:border-transparent left-0 h-6 w-6 rounded-md border border-gray-500 peer-checked:rotate-90 peer-checked:border-green peer-checked:after:opacity-100 peer-checked:after:rotate-[-48deg] after:transition-all after:duration-200 after:absolute after:left-[5.5px] after:top-[5px] after:w-1.5 after:h-[11px] after:border-r-[2.2px] after:border-b-[2.2px] after:border-white after:rotate-[90deg] after:opacity-0 group-hover:border-green peer-disabled:border-grey-100 peer-disabled:after:border-grey-100"
      :class="{ '!border-red': error }"
    />
    <span class="pl-8 max-w-[301px] text-gray-200  sm:text-base text-sm leading-130">
      <slot class="">
        <a :href="url" target="_blank" class="text-[#4489F7] font-medium">
          {{ $t(labelStart) }}
        </a>
        {{ $t(label) }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
export interface Props {
  modelValue?: any
  label?: string
  labelStart: string
  url: string
  name?: string
  value?: any
  disabled?: boolean
  error: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const handleChange = (e: any) => {
  emit('update:modelValue', props.value ? e.target.value : e.target.checked)
}
</script>
