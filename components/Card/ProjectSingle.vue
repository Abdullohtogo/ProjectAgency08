<template>
  <div class="bg-white/88 rounded-28 sm:p-5 p-3">single project</div>
</template>

<script setup lang="ts">
interface Props {
  data: {
    type: object
    required: () => {}
  }
}

defineProps<Props>()
</script>
