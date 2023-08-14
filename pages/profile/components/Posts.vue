<template>
  <div class="sm:p-5 p-3">
    <CardPost
      v-for="(card, index) in posts"
      :item="{
        name: card?.name,
        sphere: card?.sphere,
        image: card?.image?.thumbnail?.medium,
        title: card?.title,
        content: card?.content,
        thumbnail: card?.thumbnail,
        published_at: card?.published_at,
      }"
      :key="index"
      class="sm:mb-4 mb-2"
    />
    <CommonButton
      v-if="posts.length !== postsCount"
      @click="loadMore"
      label="Yana yuklash"
      variant="primary"
      class="block mx-auto"
    >
      <img src="/icons/down.svg" alt="" />
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
interface Props {
  posts: {
    name?: string
    sphere?: string
    image?: string
    content?: string
    published_at?: string
    title?: string
    thumbnail?: string
  }
  postsCount: number
}
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}

defineProps<Props>()
</script>
