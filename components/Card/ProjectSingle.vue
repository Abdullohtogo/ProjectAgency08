<template>
  <div class="bg-white/90 h-full rounded-2xl project">
    <div class="py-2 pl-3 flex items-center gap-2">
      <img
          class="w-8 h-8 object-cover rounded-full"
          v-lazy="{ src: data?.company?.brand_logo?.original }"
          :alt="data?.company?.name"
      />

      <span class="font-medium text-base text-black-100 line-clamp-1">{{
          data?.company?.name
        }}</span>
    </div>

    <div class="block relative">
      <img
          v-if="isImg"
          :src="data?.image?.file"
          class="object-cover w-full aspect-video"
          alt=""
          @error="isImg = false"
      />
      <img
          v-else
          src="~/assets/images/main_image.png"
          class="object-cover w-full aspect-video"
          alt=""
      />
      <div
          class="absolute py-1 px-2 bottom-3 left-3 bg-white rounded-[150px] flex items-center gap-1"
      >
        <img v-if="isImg" :src="data?.category?.icon?.file" alt="" />
        <img v-else src="~/assets/images/heart.png" alt="" />
        <span class="text-xs font-medium text-black-200">{{
            data?.category?.name
          }}</span>
      </div>
    </div>

    <div class="flex flex-col justify-between p-3 pb-4 md:min-h-[305px] gap-2">
      <div class="flex flex-col gap-3">
        <h3 class="text-[15px] text-black-200 font-semibold line-clamp-3">
          {{ data?.title }}
        </h3>

        <div>
          <div class="flex items-center justify-between">
            <p class="text-gray-700 text-xs">{{ $t('gathered') }}</p>
            <p class="text-gray-700 text-xs">{{ $t('finish') }}</p>
          </div>

          <div class="flex items-center justify-between">
            <p class="text-green-400 text-sm font-bold">
              {{ data.gained_money_in_percent }}%
            </p>
            <p class="text-black-200 text-sm font-bold">
              {{ formatMoneyWithSpace(parseInt(data.target_money)) }} UZS
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-[6px]">
          <div class="w-full h-2 rounded bg-green-100 my-2">
            <div
                :style="`width: ${data?.gained_money_in_percent}%`"
                class="h-full rounded bg-green-300"
            ></div>
          </div>

          <div class="flex items-center gap-1">
            <p class="text-gray-400 text-sm">
              {{ $t('contributors') }}:
              <span class="text-gray-700 font-semibold text-sm"
              >{{ data?.donation_count }}
                <span v-if="data?.donation_count !== 0">{{
                    $t('quantity')
                  }}</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <nuxt-link :to="`/project/${data?.id}`">
          <CommonButton
              label="help"
              buttonStyle="flex items-center"
              variant="secondary"
              class="w-full"
          />
        </nuxt-link>
        <span class="block w-full h-[1px] bg-gray-300 my-3" />
        <div class="flex items-center justify-between">
          <div class="flex gap-1 items-center cursor-pointer">
            <i class="icon-location text-gray-700"></i>
            <p class="text-gray-700 font-medium text-xs line-clamp-1">
              {{ data?.region?.name }}
            </p>
          </div>

          <div class="flex gap-3 items-center">
            <div class="flex gap-1 items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
              >
                <path
                    d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z"
                    stroke="#818582"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1266 14.0732 9.72665C14.6732 8.78665 14.6732 7.20665 14.0732 6.26665C12.5466 3.86665 10.3532 2.47998 7.9999 2.47998C5.64656 2.47998 3.45323 3.86665 1.92656 6.26665C1.32656 7.20665 1.32656 8.78665 1.92656 9.72665C3.45323 12.1266 5.64656 13.5133 7.9999 13.5133Z"
                    stroke="#818582"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <p class="text-gray-700 font-medium text-xs">
                {{ data.views_count }}
              </p>
            </div>

            <div class="flex gap-1 items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
              >
                <path
                    d="M2.66699 10.6667V12.3334C2.66699 13.2539 3.26395 14.0001 4.00033 14.0001H12.0003C12.7367 14.0001 13.3337 13.2539 13.3337 12.3334V10.6667"
                    stroke="#818582"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4.66699 6.00008L8.00033 2.66675L11.3337 6.00008"
                    stroke="#818582"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.00033 2.66675V10.6667"
                    stroke="#818582"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <p class="text-gray-700 font-medium text-xs">
                {{ data.share_count }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IProject} from "~/types/project";

const isImg = ref(true)
interface Props {
  data: IProject
}

defineProps<Props>()
</script>

<style>
.project {
  backdrop-filter: blur(7px);
}
</style>
