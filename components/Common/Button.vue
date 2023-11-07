<template>
  <button
    :disabled="disabled"
    :type="type"
    class="md:py-2.5 py-2 md:px-5 rounded-xl relative border disabled:leading-6 disabled:text-sm disabled:border-gray-600 disabled:text-gray-400 disabled:bg-gray-600 font-semibold transition-all duration-300 ease-in-out flex gap-2 items-center justify-center"
    :class="[
      variants[variant],
      customButton,
      {
        '!pointer-events-none': loading,
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
type TButtonVariants =
  | 'primary'
  | 'secondary'
  | 'darker'

interface Props {
  label: string
  customButton: string
  type: string
  disabled: boolean
  variant?: TButtonVariants
  loading?: boolean
}

const buttonVariantClass = computed(() => `s-button-${props.variant}`)

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const variants: Record<TButtonVariants, string> = {
  primary: 'bg-white border-green-400 text-green-400 hover:bg-green-100',
  secondary: 'text-purple bg-green-400 border-green-400 text-white hover:bg-green-600',
  darker:  'text-green-400 bg-green-100 border-transparent hover:bg-green-light',
}
</script>

<style>
body{z-index: 1;}
</style>
