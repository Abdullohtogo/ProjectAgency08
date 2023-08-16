<template>
  <div class="mt-5">
    <p class="text-black-100 font-semibold lg:text-2xl md:text-xl text-lg">
      {{ $t('geneourses') }}
    </p>
    <div class="flex flex-col">
      <div
        v-if="!loading"
        class="mt-3 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-y-4 sm:gap-x-6 gap-y-2 gap-x-4"
      >
        <CardGenerous :item="item" v-for="item in data" :key="item.id" />
      </div>
      <div
        v-else
        class="mt-3 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-y-4 sm:gap-x-6 gap-y-2 gap-x-4"
      >
        <CommonBlockPreloader
          width="160px"
          height="85px"
          :loading="loading"
          :item="item"
          v-for="item in 8"
          :key="item.id"
        >
          <CardGenerous />
        </CommonBlockPreloader>
      </div>
    </div>
    <CommonButton
      v-if="data.length !== donatCount"
      variant="primary"
      @click="loadMore"
      label="load_more"
      :loading="loading"
      class="mt-3 block mx-auto"
    >
      <img
        :class="loading ? 'arrow cursor-wait' : ''"
        src="/icons/down.svg"
        alt=""
      />
    </CommonButton>
  </div>
</template>
<script setup lang="ts">
import CommonBlockPreloader from '@/components/Common/BlockPreloader.vue'

interface Props {
  data: Array
  donatCount: number
  loading: boolean
}
const emit = defineEmits(['loadMore'])
function loadMore() {
  emit('loadMore')
}

defineProps<Props>()
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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
