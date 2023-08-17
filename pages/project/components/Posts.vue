<template>
  <div v-if="postsCount !== 0" class="sm:p-5 p-3">
    <CardPost
      v-for="(card, index) in posts"
      :item="card"
      :key="index"
      class="sm:mb-4 mb-2"
    />
    <CommonButton
      v-if="posts.length !== postsCount"
      @click="loadMore"
      label="load_more"
      variant="primary"
      class="block mx-auto"
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
      {{ $t('no_posts') }}
    </p>
    <p class="text-[#8E9BA8] leading-130 text-base">
      {{ $t('no_project_like_this') }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  posts: Array
  loading: boolean
  postsCount: number
}
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}

defineProps<Props>()
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
