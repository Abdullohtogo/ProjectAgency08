import { useI18n } from 'vue-i18n'

export const useLanguageSwitcher = () => {
  const { locale } = useI18n()

  const currentLanguage = computed(() =>
    languages.find((lang) => lang.code === locale.value)
  )

  const languages = [
    {
      name: "O'zbekcha",
      code: 'uz',
      flag: '/icons/flag/mobile/uz.svg',
    },
    {
      name: 'English',
      code: 'en',
      flag: '/icons/flag/mobile/en.svg',
    },
    {
      name: 'Русский',
      code: 'ru',
      flag: '/icons/flag/mobile/global.svg',
    },
  ]

  function changeLocale(_locale: string) {
    useCookie('locale').value = _locale
    locale.value = _locale
    window.location.reload()
  }

  return { currentLanguage, languages, changeLocale }
}
