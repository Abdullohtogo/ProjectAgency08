<template>
  <FormInput
    v-model="search"
    class="!bg-gray-800"
    :input-class="[
      'sm:!text-2xs !py-2.5 placeholder:!text-base !text-base !text-black-100 placeholder:!text-gray-700',
      {
        '!pl-0': !noSearchIcon,
      },
      inputClass,
    ]"
    :placeholder="$t(placeholder)"
    v-bind="{ inputId }"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <template v-if="!noSearchIcon" #prefix>
      <div
        class="h-max pl-4 pr-2 pointer-events-none flex-center"
        :class="searchIconWrapper"
      >
        <span
          class="icon-search text-lg text-gray-700 font-bold"
          :class="iconClass"
        />
      </div>
    </template>
    <template #suffix>
      <div
        v-if="!noClear"
        class="px-3 h-max flex-center cursor-pointer transition transition-300 opacity-0 scale-0 group"
        :class="{ '!opacity-100 !scale-100': search?.length }"
        @click="clearInput"
      >
        <span
          class="icon-close text-xl text-gray font-bold group-hover:text-red transition transition-300"
          :class="iconClass"
        />
      </div>
    </template>
  </FormInput>
</template>

<script lang="ts" setup>
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
interface Props {
  noSearchIcon?: boolean
  placeholder?: string
  modelValue?: string
  inputClass?: string
  iconClass?: string
  inputId?: string
  searchIconWrapper?: string
  noClear?: boolean
}
const props = defineProps<Props>()

interface Emits {
  (e: 'search', v: string): void
  (e: 'clear'): void
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'update:modelValue', v: string): void
}
const emit = defineEmits<Emits>()

const search = ref<string>('')

watch(
  () => search.value,
  (v) => {
    debounce(
      'search',
      () => {
        emit('search', v)
      },
      700
    )
  }
)

function clearInput() {
  search.value = ''
  emit('clear')
}

watch(
  () => props.modelValue,
  (val) => {
    search.value = val
  },
  { immediate: true }
)

watch(
  () => search.value,
  (v) => {
    emit('update:modelValue', v)
  }
)
</script>
