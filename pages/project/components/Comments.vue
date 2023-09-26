<template>
  <div class="sm:p-5 p-3 !pt-6">
    <div v-if="commentCount !== 0" class="flex flex-col items-center">
      <div class="w-full flex flex-col gap-4">
        <CardComment
          v-for="(card, index) in comments"
          :item="card"
          :key="index"
        />
      </div>
      <CommonButton
        v-if="comments.length < commentCount"
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
    <div v-else class="flex flex-col py-12 w-full items-center justify-center">
      <img src="/icons/no-data.svg" alt="no-data" class="mb-4" />
      <p class="text-[#121C25] text-2xl font-medium leading-130">
        {{ $t('no_comment') }}
      </p>
      <p class="text-[#8E9BA8] leading-130 text-base">
        {{ $t('no_project_like_this') }}
      </p>
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
