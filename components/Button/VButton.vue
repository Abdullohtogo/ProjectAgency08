<template>
  <button
      class="py-2.5 px-5 rounded-xl relative border font-semibold transition-all duration-300 ease-in-out flex gap-2 items-center justify-center"
      :class=" [buttonStyle, {
  'pointer-events-none': loading },
  buttonVariantClass,
  ]">
    <slot name="before"/>
    {{ label }}
    <span
        class="absolute animate-ping top-0 right-0 bg-red-500 rounded-full h-2 w-2"
    ></span>
    <slot/>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  label: {
    type: String,
    required: true,
  },
  variant?: 'primary' | 'secondary' | 'darker',
  loading?: boolean
}

const buttonVariantClass = computed(() => `s-button-${props.variant}`);

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const buttonStyle = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-white border-green-400 text-green-400'
    case 'secondary':
      return 'text-purple bg-green-400 border-green-400 text-white'
    case 'darker':
      return 'text-green-400 bg-green-100 border-transparent'
    default:
      return 'bg-green'
  }
})
</script>

<!--<style>-->
<!--.s-button-primary:after {-->
<!--  content: "";-->
<!--  position: absolute;-->
<!--  border-radius: 38px;-->
<!--  opacity: 0.4000000059604645;-->
<!--  background: #27A44A;-->
<!--  filter: blur(14px);-->
<!--  width: 100%;-->
<!--  height: 70%;-->
<!--  z-index: -99;-->
<!--}-->
<!--</style>-->