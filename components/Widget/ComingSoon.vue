<template>
  <div class="md:h-[calc(100vh-88px)] h-[calc(100vh-73px)] mx-auto">
    <div class="h-full relative my-auto sm:py-12 p-6 px-4 pb-12 md:pb-[180px]">
      <div
        class="absolute top-[45%] right-0 translate-y-[-50%] z-0 w-[48%] md:block hidden"
      >
        <img src="../../public/icons/main-line.svg" alt="line" />
      </div>
      <img
        src="../../public/icons/green-elipse.svg"
        class="absolute top-0 left-0"
        alt="green-elipse"
      />

      <div
        class="container relative z-10 flex flex-col justify-center h-full p-0"
      >
        <div class="flex items-start relative z-100">
          <div class="flex flex-col max-w-[620px]">
            <div>
              <h2
                style="line-height: 1.3"
                class="md:text-3xl sm:text-2xl text-xl lg:text-[42px] lg:leading-10 relative font-bold uppercase text-green-500"
              >
                {{ $t('good_causes') }}
              </h2>
              <p
                class="text-green-500 text-lg my-5 md:my-6 pt-2 md:text-2xl leading-128"
              >
                {{ $t('coming_soon') }}
              </p>
            </div>

            <div class="mt-4 flex gap-3">
              <a
                :href="item.url"
                target="_blank"
                v-for="item in share"
                :key="item.id"
                v-tooltip.top="item?.name"
                class="hover:opacity-80 transition-all duration-300"
              >
                <img :src="item.src" alt="icon" />
              </a>
            </div>
          </div>
          <div class="w-[60%] relative hidden lg:block">
            <img
              class="absolute -top-24 left-0 z-10"
              src="../../public/images/coming-soon-phone.png"
              alt="phone"
            />
          </div>
        </div>
      </div>
      <div class="yellow-bg bottom-0 right-0 hidden md:block"></div>
      <!-- <img
      src="@/public/icons/yellow-elipse.svg"
      class="absolute bottom-0 right-0"
      alt="yellow-elipse"
    /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const contacts = ref()
onMounted(() => {
  ;(() => {
    return new Promise((resolve, reject) => {
      useApi()
        .$get('care/api/v1/CareContact/')
        .then((res: any) => {
          contacts.value = res
          resolve(res)
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  })()
})
const share = computed(() => {
  return [
    {
      id: 1,
      url: contacts.value?.telegram,
      name: 'Telegram',
      src: '/icons/telegram.svg',
    },
    {
      id: 2,
      url: contacts.value?.twitter,
      src: '/icons/twitter.svg',
      name: 'X (Twitter)',
    },
    {
      id: 3,
      url: contacts.value?.youtube,
      src: '/icons/youtube.svg',
      name: 'YouTube',
    },
    {
      id: 4,
      url: contacts.value?.instagram,
      src: '/icons/instagram.svg',
      name: 'Instagram',
    },
  ]
})
const items = [
  {
    id: 1,
    text: 'realibility',
    url: '/icons/shield-tick.svg',
  },
  {
    id: 2,
    text: 'transparency',
    url: '/icons/search-status.svg',
  },
  {
    id: 3,
    text: 'simplicity',
    url: '/icons/heart.svg',
  },
]
</script>

<style>
body {
  min-height: 100vh !important;
}
.yellow-bg {
  position: absolute;
  margin-left: auto;
  z-index: -1;
  width: 295px;
  height: 295px;
  border-radius: 295px;
  opacity: 0.6;
  background: var(--stars-3-star, #f3c63e);
  filter: blur(203.77342224121094px);
}
.underlined {
  z-index: 1;
}

.underlined::before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 6px;
  height: 0;
  width: 103%;
  border-bottom: 8px solid #16cc53;
  transition: width 0.3s ease;
}

@media only screen and (max-width: 1024px) {
  .underlined::before {
    bottom: 3px;
  }
}

@media only screen and (max-width: 768px) {
  .underlined::before {
    bottom: 1.5px;
  }
}

@media only screen and (max-width: 640px) {
  .underlined::before {
    bottom: -1px;
  }
}
</style>
