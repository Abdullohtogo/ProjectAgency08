<template>
  <div
    class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 md:mx-11 mx-5 rounded-40"
  >
    <div class="container flex justify-between">
      <div class="my-16">
        <h3
          class="lg:text-[32px] md:text-[28px] text-2xl leading-130 text-white font-semibold"
        >
          Bog‘lanish usullari
        </h3>
        <p class="md:mt-3 mt-2 leading-130 text-white/60 max-w-[436px]">
          Biz bilan quyida keltirilgan yo‘llar orqali aloqaga chiqishingiz
          mumkin
        </p>
        <div class="flex flex-col gap-2 mt-6">
          <a
            :href="item?.url"
            target="_blank"
            class="p-3 group flex items-center gap-2 rounded-40 transition transition-300 hover:border-white border border-white/20"
            v-for="item in info"
            :key="item?.id"
          >
            <img :src="item?.src" alt="icon" class="w-[42px] h-[42px]" />
            <div class="flex flex-col gap-[3px]">
              <p class="sm:text-sm text-xs text-white/60 leading-130">
                {{ item?.title }}
              </p>
              <div
                class="text-white sm:text-base text-sm font-medium leading-130 items-center flex gap-1.5"
              >
                <p>{{ item?.text }}</p>
                <i v-if="item?.icon">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66699 7.83337L14.1337 2.3667"
                      class="group-hover:stroke-white"
                      stroke="#8EAF9B"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6668 5.0335V1.8335H11.4668"
                      class="group-hover:stroke-white"
                      stroke="#8EAF9B"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33301 1.8335H5.99967C2.66634 1.8335 1.33301 3.16683 1.33301 6.50016V10.5002C1.33301 13.8335 2.66634 15.1668 5.99967 15.1668H9.99967C13.333 15.1668 14.6663 13.8335 14.6663 10.5002V9.16683"
                      class="group-hover:stroke-white"
                      stroke="#8EAF9B"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-3.5 flex flex-col">
          <p class="text-sm text-white mb-2 font-semibold">
            Biz ijtimoiy tarmoqlarda
          </p>
          <div class="flex flex-row md:gap-3 gap-2">
            <a
              :href="item.url"
              class="p-2 rounded-full group transition transition-300 hover:bg-[#33573e] bg-[#e8f0fe33]"
              v-for="item in social"
              :key="item.id"
            >
              <img :src="item.src" alt="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-[43%] relative">
        <FormContact
          class="absolute top-1/2 -translate-y-1/2"
          @open="toggleModal"
        />
        <Teleport to="body">
          <transition name="fade" appear>
            <div
              class="modal-overlay"
              v-if="showModal"
              @click="showModal = false"
            ></div>
          </transition>
          <transition name="pop" appear>
            <FormModal
              class="modal"
              v-if="showModal"
              role="dialog"
              @close="toggleModal"
              :show="showModal"
            />
          </transition>
        </Teleport>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const info = [
  {
    id: 1,
    src: '/icons/location1.svg',
    title: 'Manzilimiz',
    text: 'Oybek ko‘chasi 24-uy, Toshkent, O‘zbekiston',
    icon: '/icons/openin.svg',
    url: 'https://goo.gl/maps/Gn5ieiks1NbMdLQU6',
  },
  {
    id: 2,
    src: '/icons/phone.svg',
    title: 'Telefon raqamimiz:',
    text: '+998 71 200 7007',
    url: 'tel:+998 71 200 7007',
  },
  {
    id: 3,
    src: '/icons/email.svg',
    title: 'Elektron manzilimiz:',
    text: 'info@uic.group',
    url: 'mailto: info@uic.group',
  },
]

const social = [
  {
    id: 1,
    url: 'instagram.com',
    src: '/icons/instagram1.svg',
  },
  {
    id: 2,
    url: 'youtube.com',
    src: '/icons/youtube1.svg',
  },
  {
    id: 3,
    url: 'twitter.com',
    src: '/icons/twitter1.svg',
  },
  {
    id: 4,
    url: 'telegram.com',
    src: '/icons/telegram1.svg',
  },
]

const showModal = ref(false)

function toggleModal() {
  showModal.value = !showModal.value
  console.log(showModal.value)
}
</script>

<style >
.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 434px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
