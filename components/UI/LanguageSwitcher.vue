<template>
  <UIDropdown
    :show="showDropdown"
    :head-class="[
      'flex items-center gap-1 text-gray-700 hover:opacity-80 transition-300 cursor-pointer py-2 transition-colors duration-300',
      { '!text-blue !opacity-100': showDropdown },
      { 'text-white': variant === 'transparent' },
    ]"
    body-class="!w-[138px] border border-gray-250 bg-white rounded-xl"
    @toggle="handleDropdownToggle"
  >
    <template #head>
      <span class="icon-languages text-xl transition-300" />
      <img src="/icons/language-outline.svg" alt="">
      <span class="text-sm transition-300 text-[#596066]">{{ currentLanguage?.name }}</span>
      <span
      :class="[{ 'rotate-180': showDropdown }]"
      class="icon-call text-black-100 text-xs transition-transforms transition-300" />
    </template>
    <template #body>
      <div v-for="(lang, index) in languages" :key="index" class="w-full">
        <div
          class="flex items-center justify-between gap-4 py-3 pl-4 pr-2 cursor-pointer transition-300 hover:bg-white-100"
          @click="changeLocale(lang?.code)"
        >
          <span class="text-base font-semibold text-dark">
            {{ lang.name }}
          </span>
          <img
            v-if="lang?.code === currentLanguage?.code"
           src="@/public/icons/trick.svg" alt="trick icon">
        </div>
      </div>
    </template>
  </UIDropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

interface Props {
  variant: 'default' | 'transparent'
}

defineProps<Props>()

const languages = [
  {
    name: 'Русский',
    code: 'ru',
    flag: '/icons/flag/ru.svg',
  },
  {
    name: 'English',
    code: 'en',
    flag: '/icons/flag/en.svg',
  },
  {
    name: "O'zbekcha",
    code: 'uz',
    flag: '/icons/flag/uz.svg',
  }
]

const { locale } = useI18n()

const showDropdown = ref(false)

const currentLanguage = computed(() =>
  languages.find((lang) => lang.code === locale.value)
)

function handleDropdownToggle(val: boolean) {
  showDropdown.value = val
}

function changeLocale(_locale: string) {
  useCookie('locale').value = _locale
  locale.value = _locale
  window.location.reload()
}
</script>
