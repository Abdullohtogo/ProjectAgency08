<template>
  <div class="sm:p-5 p-3">
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
      <img src="/icons/down.svg" alt="" />
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
interface Props {
  posts: Array
  postsCount: number
}
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}

defineProps<Props>()
</script>
