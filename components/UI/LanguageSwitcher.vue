<template>
  <UIDropdown
    :show="showDropdown"
    :head-class="[
      'flex items-center gap-1 text-gray-700 group transition transition-300 cursor-pointer py-2',
      { '!text-blue !opacity-100': showDropdown },
      { 'text-white': variant === 'transparent' },
    ]"
    :body-class="
      `!w-[138px] border !border-[2px] !border-gray-900 bg-white rounded-xl` &&
      currentLanguage?.code == 'kaa'
    "
    @toggle="handleDropdownToggle"
  >
    <template #head>
      <span
        class="icon-language text-[#596066] group-hover:text-[#090E14] transition transition-300 text-base"
      />
      <span
        class="text-[13px] leading-130 transition transition-300 group-hover:text-[#090E14] text-[#596066]"
        >{{ currentLanguage?.name }}</span
      >
      <span
        :class="[{ 'rotate-180': showDropdown }]"
        class="icon-arrow-down group text-xs group-hover:text-[#090E14] transition transition-300"
      />
    </template>
    <template #body>
      <div v-for="(lang, index) in languages" :key="index" class="w-full">
        <div
            class="flex items-center justify-between gap-4 py-3 pl-4 pr-2 cursor-pointer transition-300 hover:bg-gray-900"
            @click="changeLocale(lang?.code)"
        >
          <span class="text-base font-semibold text-dark">
            {{ lang.name }}
          </span>
          <img
              v-if="lang?.code === currentLanguage?.code"
              src="@/public/icons/trick.svg"
              alt="trick icon"
          />
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
    name: "O'zbekcha",
    code: 'uz',
    flag: '/icons/flag/uz.svg',
  },
  {
    name: 'Ўзбекча',
    code: 'uzc',
    flag: '/svg/flag/uz.svg',
  },
  {
    name: 'Qaraqalpaqsha ',
    code: 'kaa',
    flag: '/svg/flag/uz.svg',
  },
  {
    name: 'English',
    code: 'en',
    flag: '/icons/flag/en.svg',
  },
  {
    name: 'Русский',
    code: 'ru',
    flag: '/icons/flag/ru.svg',
  },
]

const { locale } = useI18n()

const showDropdown = ref(false)

const currentLanguage = computed(() =>
  languages.find((lang) => lang.code === locale.value)
)

function handleDropdownToggle(val: boolean) {
  showDropdown.value = val
}
const changeLocale = (lang: string) => {
  locale.value = lang
  showDropdown.value = false
  const _locale = useCookie('locale')
  if (_locale.value !== lang) {
    _locale.value = lang
    // window.location.reload()
  }
}
// function changeLocale(_locale: string) {
//   window.location.reload()
//   useCookie('locale').value = _locale
//   locale.value = _locale
// }
</script>
