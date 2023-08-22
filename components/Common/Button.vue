<template>
  <button
  :disabled="disabled"
    :type="type"
    class="md:py-2.5 py-2 md:px-5 px-1.5 rounded-xl relative border font-semibold transition-all duration-300 ease-in-out flex gap-2 items-center justify-center"
    :class="[
      buttonStyle,
      customButton,
      {
        'pointer-events-none': loading,
      },
      buttonVariantClass,
    ]"
  >
    <slot name="before" />
    {{ $t(label) }}
    <span
      class="absolute animate-ping top-0 right-0 bg-red-500 rounded-full h-2 w-2"
    ></span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  label: {
    type: string
    required: true
  }
  customButton: string
  type: string
  disabled: boolean
  variant?: 'primary' | 'secondary' | 'darker'
  loading?: boolean
}

const buttonVariantClass = computed(() => `s-button-${props.variant}`)

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const buttonStyle = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-white border-green-400 text-green-400 hover:bg-green-100'
    case 'secondary':
      return 'text-purple bg-green-400 border-green-400 text-white hover:bg-green-600'
    case 'darker':
      return 'text-green-400 bg-green-100 border-transparent hover:bg-green-light'
    default:
      return 'bg-green'
  }
})
</script>

<style>
button:disabled,
button[disabled] {
  border: 1px solid #e5ecdf;
  background-color: #e5ecdf;
  color: #808f7c;
  ont-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
}
</style>
