<template>
  <div class="mt-5">
    <p class="text-black-100 font-semibold lg:text-2xl md:text-xl text-lg">
      {{$t('geneourses')}}
    </p>
    <div class="flex flex-col">
      <div
        class="mt-3 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-y-4 sm:gap-x-6 gap-y-2 gap-x-4"
      >
        <CardGenerous :item="item" v-for="item in data" :key="item.id" />
      </div>
      <CommonButton
        v-if="data.length !== donatCount"
        variant="primary"
        @click="loadMore"
        label="Yana yuklash"
        class="mt-3 block mx-auto"
      >
        <img src="/icons/down.svg" alt="" />
      </CommonButton>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  data: Array
  donatCount: number
}
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}

defineProps<Props>()
</script>
