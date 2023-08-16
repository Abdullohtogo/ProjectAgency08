<template>
  <div class="sm:p-5 p-3 !pt-1">
    <div class="lg:px-[92px] md:px-10 px-5 mt-4">
      <CommonSearch v-model="search" placeholder="search" />
      <div class="grid w-full items-start gap-y-2 gap-x-4 sm:mt-4 mt-3">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="group transition-300 col-span-2 md:col-span-1 rounded-xl bg-gray-800 sm:mb-4 mb-2"
          :class="[
            { 'bg-white border border-green-400': selectedItem === item.id },
          ]"
        >
          <div
            class="flex items-center justify-between cursor-pointer py-2 md:py-4 sm:px-5 px-2"
            @click="openItem(item.id)"
          >
            <h4
              class="font-semibold sm:leading-140 sm:text-xl text-base text-black-200 transition-300 group-hover:text-purple line-clamp-2"
            >
              {{ item?.question }}
            </h4>
            <div class="ml-4">
              <img
                src="/icons/arrow-down.svg"
                alt=""
                :class="{ 'rotate-180 ease-in-out': selectedItem === item.id }"
              />
            </div>
          </div>

          <CollapseTransition>
            <div v-if="selectedItem === item.id" class="sm:p-4 p-2 pt-0">
              <p class="text-black-200 sm:text-sm text-xs leading-140">
                {{ item?.answer }}
              </p>
            </div>
          </CollapseTransition>
        </div>
      </div>
    </div>
    <CommonButton
      @click="$emit('loadMore')"
      v-if="faqs.length !== faqCount"
      label="load_more"
      variant="primary"
      class="mx-auto"
    >
      <img src="/icons/down.svg" alt="" />
    </CommonButton>
  </div>
</template>
<script setup lang="ts">
import CommonSearch from '@/components/Common/Search.vue'

interface Props {
  faqCount: number
  faqs: {
    id: number
    question: string
    answer: number
  }
}
async function useUpdateRouteQuery(key: string, value: string | undefined) {
  const router = useRouter()
  const routeQuery = { ...router.currentRoute.value.query }

  if (!value) {
    delete routeQuery[key]
  } else {
    routeQuery[key] = value
  }

  await router.replace({ query: routeQuery })
}

const timeouts: Record<string, any> = {}

const cTimeout = (key = 'key') => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key])
    timeouts[key] = undefined
  }
}
const debounce = (key = 'key', fn = () => {}, timeout = 500) => {
  const sTimeout = (key: string, fn: any, timeout: number) => {
    cTimeout(key)

    timeouts[key] = setTimeout(() => {
      try {
        fn()
      } catch (e) {}

      timeouts[key] = undefined
    }, timeout)
  }

  return sTimeout(key, fn, timeout)
}

const route = useRoute()

defineProps<Props>()
defineEmits(['loadMore'])

const selectedItem = ref(0)

const openItem = (id: number) => {
  if (selectedItem.value === id) {
    selectedItem.value = 0
    return
  }
  selectedItem.value = id
}
</script>
