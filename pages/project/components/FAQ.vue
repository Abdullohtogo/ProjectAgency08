<template>
  <div class="sm:p-5 lg:px-[92px] mt-4 md:px-10 px-5 p-3 !pt-1">
    <CommonSearch v-model="search" @input="emitValue()" placeholder="search" />
    <Transition mode="out-in" name="fade">
      <div :key="faqCount !== 0">
        <div v-if="faqCount !== 0">
          <div class=" ">
            <div class="grid w-full items-start gap-y-2 gap-x-4 sm:mt-4 mt-3">
              <div
                v-for="(item, index) in faqs"
                :key="index"
                class="group transition duration-300 col-span-2 md:col-span-1 rounded-xl bg-gray-800 sm:mb-4 mb-2"
                :class="[
                  {
                    'bg-white border border-green-400':
                      selectedItem === item.id,
                  },
                ]"
              >
                <div
                  class="flex items-center justify-between cursor-pointer py-2 md:py-4 sm:px-5 px-2"
                  @click="openItem(item.id)"
                >
                  <h4
                    class="break-words break-all font-semibold sm:leading-140 sm:text-xl text-base text-black-200 transition-300 group-hover:text-purple"
                  >
                    {{ item?.question }}
                  </h4>
                  <div class="ml-4">
                    <img
                      src="/icons/arrow-down.svg"
                      alt=""
                      :class="{
                        'rotate-180 ease-in-out': selectedItem === item.id,
                      }"
                    />
                  </div>
                </div>

                <CollapseTransition class="transition duration-300">
                  <div
                    v-if="selectedItem === item.id"
                    class="sm:p-4 p-2 pt-0 transition duration-300"
                  >
                    <p
                      class="text-black-200 sm:text-sm text-xs leading-140 break-words break-all"
                    >
                      {{ item?.answer }}
                    </p>
                  </div>
                </CollapseTransition>
              </div>
            </div>
          </div>
          <CommonButton
            @click="$emit('loadMore', search)"
            v-if="faqs.length !== faqCount"
            label="load_more"
            variant="primary"
            class="mx-auto"
          >
            <img
              src="/icons/down.svg"
              :class="loading ? 'arrow cursor-wait' : ''"
              alt=""
            />
          </CommonButton>
        </div>
        <div
          v-else
          class="flex flex-col py-12 w-full items-center justify-center"
        >
          <img src="/icons/no-data.svg" alt="no-data" class="mb-4" />
          <p class="text-[#121C25] text-2xl font-medium leading-130">
            {{ $t('no_faq') }}
          </p>
          <p class="text-[#8E9BA8] leading-130 text-base">
            {{ $t('no_project_like_this') }}
          </p>
        </div>
      </div>
    </Transition>
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
  loading: boolean
}
defineProps<Props>()
const emit = defineEmits(['loadMore', 'onType'])

const search = ref()
function emitValue() {
  emit('onType', search.value)
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

const selectedItem = ref(0)

const openItem = (id: number) => {
  if (selectedItem.value === id) {
    selectedItem.value = 0
    return
  }
  selectedItem.value = id
}
</script>

<style>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
