<template>
  <div class="sm:p-5 p-3 !pt-6">
    <div class="flex flex-col items-center">
      <div class="flex flex-col gap-4">
        <CardComment
          v-for="(card, index) in comments"
          :item="card"
          :key="index"
        />
      </div>
      <CommonButton
        v-if="comments.length !== commentCount"
        @click="loadMore"
        label="load_more"
        variant="primary"
        class="block mx-auto mt-5"
      >
        <img
          src="/icons/down.svg"
          :class="loading ? 'arrow cursor-wait' : ''"
          alt="arrow-down"
        />
      </CommonButton>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  comments: Array
  commentCount: number
  loading: boolean
}
defineProps<Props>()
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}
</script>

<style>
.arrow {
  animation: circle 2s infinite linear;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
