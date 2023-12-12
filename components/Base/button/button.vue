<template>
  <button
    class="transition-200 border border-solid border-pink rounded-[50px] px-[31px] py-[13px] group"
    :class="btnStyles"
  >
    <span :class="btnText">
      {{ text }}
    </span>
  </button>
</template>
<script setup>
  const props = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
  variant: {
    type: String,
    default: 'primary', // primary | secondary
  },
})

const text = ref('Button')

const btnStyles = computed(() => {
  const styles = {
    primary: 'bg-pink hover:bg-white ',
    secondary: 'bg-white hover:bg-pink',
  }
  return styles[props.variant]
})
const btnText= computed(()=>{
  const styles = {
    primary: 'text-white group-hover:text-pink',
    secondary: 'text-pink group-hover:text-white',
  }
  return styles[props.variant]
})
</script>