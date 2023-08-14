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
        label="Yana yuklash"
        variant="primary"
        class="block mx-auto mt-5"
      >
        <img src="/icons/down.svg" alt="" />
      </CommonButton>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  comments: Array
  commentCount: number
}
defineProps<Props>()
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}
</script>
