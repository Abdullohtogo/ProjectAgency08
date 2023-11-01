<template>
  <div
    class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 md:mx-11 mx-5 sm:rounded-40 rounded-2xl relative z-50"
  >
    <div class="container flex justify-between flex-col lg:flex-row">
      <div class="lg:my-16 md:my-8 my-7 sm:mx-auto">
        <h3
          class="lg:text-[32px] md:text-[28px] text-2xl leading-130 text-white font-semibold"
        >
          {{ $t('contact_types') }}
        </h3>
        <p class="md:mt-3 mt-2 leading-130 text-white/60 max-w-[436px]">
          {{ $t('contact_with_us_these_ways') }}
        </p>
        <div class="flex flex-col gap-2 mt-6">
          <a
            :href="item?.url"
            target="_blank"
            class="sm:p-3 p-1.5 group flex items-center gap-2 rounded-40 transition transition-300 hover:border-white border border-white/20"
            v-for="item in contactInfoDetails"
            :key="item?.id"
          >
            <img :src="item?.src" alt="icon" class="w-[42px] h-[42px]" />
            <div class="flex flex-col gap-[3px] max-sm:pr-2">
              <p class="sm:text-sm text-xs text-white/60 leading-130">
                {{ $t(item?.title) }}
              </p>
              <div
                class="text-white sm:text-base text-sm font-medium leading-130 flex items-start md:items-center gap-1.5"
              >
                <p>{{ item?.text }}</p>
                <i v-if="item?.icon">
                  <img src="/icons/openin.svg" alt="openin">
                </i>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-3.5 flex flex-col">
          <p class="text-sm text-white mb-2 font-semibold">
            {{ $t('we_on_social') }}
          </p>
          <div class=" flex flex-row md:gap-3 gap-2">
            <a
              target="_blank"
              :href="item.url"
              class="p-2 w-10 text-center text-white rounded-full group transition transition-300 hover:bg-[#33573e] bg-[#e8f0fe33]"
              v-for="item in contactSocialDetails"
              v-tooltip.top="item.name"
              :key="item.id"
            >
              <img :src="item.src" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="lg:w-[43%] md:w-2/3 w-full relative mx-auto">
        <FormContact
          class="static lg:absolute lg:top-1/2 lg:-translate-y-1/2 translate-y-5"
          @open="toggleModal"
        />
        <teleport to="body">
          <Transition name="fade">
            <div
              v-if="showModal"
              @click="onClickOutside()"
              class="fixed top-0 left-0 w-full h-full z-[9999999] bg-modal hidden opacity-0"
              :class="{ '!block opacity-100 overflow-hidden ': showModal }"
            >
              <FormModal
                class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999999]` sm:max-w-[434px] w-[70%] sm:w-full"
                @close="toggleModal"
                :show="showModal"
              />
            </div>
          </Transition>
        </teleport>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import {useProjectContact} from "~/composables/useProjectContact";

function onClickOutside() {
  document.body.style.overflow = 'auto'
  showModal.value = false
}

const { fetchContactInfo, fetchSocialsInfo, contactInfoDetails, contactSocialDetails } = useProjectContact()

fetchSocialsInfo()
fetchContactInfo()

const showModal = ref(false)

function toggleModal() {
  showModal.value = !showModal.value
}
</script>
