<template>
  <button class="py-2.5 px-5 rounded-xl relative border-[1px] font-semibold transition-all duration-300 ease-in-out"
:class=" [buttonStyle, {
  'pointer-events-none': loading }]">
  {{ label }}
  <span
      class="absolute animate-ping top-0 right-0 bg-red-500 rounded-full h-2 w-2"
  ></span>
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
      return 'text-purple'
    default:
      return 'bg-green'
  }
})
</script>
