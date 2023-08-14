<template>
  <div>
    <div class="sm:p-5 p-3">
      <CommonBlockPreloader
        :border-radius="'16px'"
        width="100%"
        height="357px"
        :loading="loading"
      >
        <video
          class="rounded-2xl h-[357px]"
          width="1920"
          height="357"
          loop
          id="myVideo"
          controls
        >
          <source :src="detail?.about_video?.file" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CommonBlockPreloader>
      <CommonBlockPreloader
        :border-radius="'8px'"
        preloaderClass="mt-3"
        width="100%"
        height="20px"
        :loading="loading"
      >
        <div
          class="mt-4 text-sm text-black-200 leading-130"
          v-html="detail?.about"
        />
      </CommonBlockPreloader>
      <div class="border-t border-gray-300 pt-4 mt-4 flex justify-between">
        <CommonBlockPreloader
          :border-radius="'8px'"
          preloaderClass="mt-3"
          width="78px"
          height="18px"
          :loading="loading"
        >
          <div class="flex items-center gap-1 text-gray-700">
            <span class="icon-location text-base" />
            <p class="text-sm text-gray-700">{{ detail?.region?.name }}</p>
          </div>
        </CommonBlockPreloader>
        <CommonBlockPreloader
          :border-radius="'8px'"
          preloaderClass="mt-3"
          width="132px"
          height="18px"
          :loading="loading"
        >
          <div class="flex gap-3 items-center">
            <div class="flex gap-1 text-gray-700">
              <img src="/icons/eye.svg" alt="" />
              <p class="text-sm font-medium">{{ detail?.views_count }}</p>
            </div>
            <div class="flex items-center gap-1 text-gray-700">
              <span class="icon-upload text-base" />
              <p class="text-sm font-medium">{{ detail?.share_count }}</p>
            </div>
            <div class="flex items-center gap-1 text-gray-700">
              <span class="icon-message text-base" />
              <p class="text-sm font-medium">{{ detail?.comment_count }}</p>
            </div>
          </div>
        </CommonBlockPreloader>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CommonBlockPreloader from '@/components/Common/BlockPreloader.vue'

interface Props {
  detail: Array
  loading: boolean
}

const modalOpen = ref(false)
const bannerOpen = ref(false)

defineProps<Props>()
</script>

<style>
.fade-enter {
  transition: ease-out duration-200;
}
.fade-enter-start {
  opacity: 0;
}
.fade-enter-end {
  opacity: 100;
}
.fade-leave {
  transition: ease-out duration-100;
}
.fade-leave-start {
  opacity: 100;
}
.fade-leave-end {
  opacity: 0;
}

.out-enter {
  transition: ease-out duration-300;
}
.out-enter-start {
  opacity: 0;
  transform: scale(0.75);
}
.out-enter-end {
  opacity: 100;
  transform: scale(1);
}
.out-leave {
  transition: ease-out duration-200;
}
.out-leave-start {
  opacity: 100;
  transform: scale(1);
}
.out-leave-end {
  opacity: 0;
  transform: scale(0.75);
}
</style>
