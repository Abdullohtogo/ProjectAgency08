import {
  ComposerOptions,
  createI18n,
  LocaleMessages,
  VueMessageType,
} from 'vue-i18n'

import en from '~/locales/en'
import ru from '~/locales/ru'
import uz from '~/locales/uz'
import uzc from '~/locales/uzc'
import kaa from '~/locales/kaa'

export default defineNuxtPlugin((nuxtApp) => {
  const lang = useCookie('locale')
  if (!lang.value) {
    lang.value = 'uz'
  }
  const locale = useCookie('locale').value ?? 'uz'
  const messages: ComposerOptions['messages'] = {
    ru: ru as unknown as LocaleMessages<VueMessageType>,
    uz: uz as unknown as LocaleMessages<VueMessageType>,
    en: en as unknown as LocaleMessages<VueMessageType>,
    kaa: kaa as unknown as LocaleMessages<VueMessageType>,
    uzc: uzc as unknown as LocaleMessages<VueMessageType>,
  }
  const i18n = createI18n({
    locale,
    legacy: false,
    messages,
  })

  const localeFetch = { ru, uz, en, kaa, uzc }

  ;(async () => {
    i18n.global?.setLocaleMessage(
      locale,
      await localeFetch[locale as keyof typeof localeFetch]()
    )
  })()

  nuxtApp.vueApp.use(i18n)
})
