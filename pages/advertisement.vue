<template>
  <div class="md:pb-[72px]">
    <div
      class="md:mt-8 md:pt-8 max-w-[704px] mx-auto bg-white md:border-b border-[#D1D6DC] max-md:min-h-screen md:rounded-2xl p-4 md:p-8"
    >
      <div
        class="flex items-center justify-between mb-5 max-md:flex-col gap-4 max-md:items-stretch"
      >
        <h1 class="text-2xl text-dark leading-130 font-semibold">
          {{ $t('adv') }}
        </h1>
        <CommonButton
          label="order_adv"
          variant="secondary"
          @click="goToOrder"
          custom-button="!py-2 !px-6 text-sm !font-medium"
        />
      </div>
      <div class="static-text" v-html="data.content" />
      <div
        id="orderAdv"
        class="border-t border-gray-900 pt-5 mt-5 flex flex-col gap-5"
      >
        <h4 class="text-2xl font-semibold leading-130 text-dark">
          {{ $t('fill_form') }}
        </h4>
        <div class="flex max-md:flex-col gap-4 w-full">
          <Input
            label="full_name"
            class="w-full"
            v-model="form.values.full_name"
            :error="form.$v.value.full_name.$error"
            :placeholder="$t('care_frontoffice_enter_full_name')"
          />
          <Input
            class="w-full"
            v-maska="'## ### ## ##'"
            v-model="form.values.phone"
            :error="form.$v.value.phone.$error"
            placeholder="00 000 00 00"
            :label="$t('phone_number')"
          >
            <template #default>
              <div
                class="flex items-center gap-2 text-base md:text-sm text-dark pr-1 leading-130"
              >
                <img
                  class="w-6 h-6 rounded"
                  src="/icons/flag/uzbekistan.svg"
                  alt="uzb icon"
                />
                +998
              </div>
            </template>
          </Input>
        </div>
        <div>
          <label for="" class="font-medium leading-130 text-[#596066] mb-2">
            {{ $t('which_product_or_service_do_you_advert') }}
          </label>
          <FormTextarea
            v-model="form.values.text"
            :error="form.$v.value.text.$error"
            class="mt-2 min-h-[150px]"
            maxlength="5000"
            :placeholder="$t('which_product_or_service_do_you_advert_full')"
          />
        </div>
        <div
          class="flex items-center justify-between max-md:flex-col gap-4 max-md:items-stretch"
        >
          <Checkbox
            v-model="form.values.privacy_policy"
            :error="form.$v.value.privacy_policy.$error"
          >
            <i18n-t keypath="terms_of_use_checkbox" tag="p">
              <template #terms>
                <a
                  :href="termsLink"
                  target="_blank"
                  class="text-[#4489F7] font-medium"
                  >{{ $t('user_terms') }}</a
                >
              </template>
            </i18n-t>
          </Checkbox>
          <CommonButton
            variant="secondary"
            label="send_application"
            @click="submit"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:w-[43%] md:w-2/3 w-full relative mx-auto z-[99999999999]">
    <Transition name="fade">
      <div
        v-if="showModal"
        @click="onClickOutside()"
        class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
        :class="{ '!block opacity-100 overflow-hidden ': showModal }"
      >
        <FormModal
          class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:max-w-[434px] w-[70%] sm:w-full"
          @close="toggleModal"
          :show="showModal"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { required, sameAs } from '@vuelidate/validators'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import Checkbox from '~/components/Common/Checkbox.vue'
import { useApi } from '~/composables/useApi'
import { CONFIG } from '~/config'

const { t } = useI18n()
const showModal = ref(false)

const form = useForm(
  {
    full_name: '',
    phone: '',
    text: '',
    privacy_policy: false,
  },
  {
    full_name: { required },
    phone: { required, isValidPhone },
    text: { required },
    privacy_policy: { sameAs: sameAs(true) },
  }
)

const data = {
  title: 'title',
  content: `Пожалуйста, ознакомьтесь с основной информацией и заполните детали ниже. Наша команда отправит вам необходимые документы для рекламного
соглашения и банковские реквизиты для перечисления депозита. Мы свяжемся с вами через некоторое время
Приведенная ниже информация не является частью какого-либо юридического документа, подробные условия доступны в Рекламном соглашении, которое вы получите от нашей команды.
<ul>
<li>
Рекламодатели могут выбирать язык и примерную тематику категорий, на которых будет показываться их реклама. Также можно выбрать конкретные категории или страницы, на которых будет показываться определенная реклама.
</li>
<li>
Плата за рекламу взимается на основе CPM (Cost-Per-Mille), которая представляет собой цену за тысячу просмотров рекламы.
</li>
<li>
Объявление отображается, когда его ставка CPM побеждает аукционе, определяющем лучшую ставку CPM для места публикации.</li>
</ul>
Чтобы обеспечить и поддерживать высокое качество рекламного контента, для запуска рекламы на рекламной платформе Sharh требуется минимальный авансовый платеж в размере 100 000 000 сум.
Из этого платежа Sharh удерживает 50 000 000 сум в качестве депозита, а оставшуюся сумму предоставляет рекламодателю для показа рекламы.
Все объявления должны соответствовать Условиям обслуживания рекламной платформы, а также Политике и рекомендациям Sharh в отношении рекламы.`,
}
const toggleModal = () => {
  showModal.value = !showModal.value
}

function onClickOutside() {
  document.body.style.overflow = 'auto'
  showModal.value = false
}

function submit() {
  form.$v.value.$touch()
  if (!form.$v.value.$invalid) {
    useApi()
      .$post('/review/api/v1/front_office/OrderAdvertisingCreate/', {
        body: {
          ...form.values,
          phone: `+998${form.values.phone.replace(/\D/g, '')}`,
        },
      })
      .then(() => {
        // useCustomToast().showToast(t('order_successfully_sent'), 'success')
        showModal.value = true
        form.values = {
          phone: '',
          full_name: '',
          text: '',
          privacy_policy: false,
        }
        form.$v.value.$reset()
      })
    // .catch((err) => {
    //   useCustomToast().showToast(t(err._data.errors[0].error), 'error')
    // })
  }
}

function goToOrder() {
  const order = document.getElementById('orderAdv')
  order?.scrollIntoView({ behavior: 'smooth' })
}

const termsLink = CONFIG.ID_DOMAIN + '/help-center/privacy-policy'

useSeoMeta({
  title: () => t('adv'),
  ogTitle: () => t('adv'),
  description: () => data.content,
  ogDescription: () => data.content,
  twitterTitle: () => t('adv'),
})
</script>
