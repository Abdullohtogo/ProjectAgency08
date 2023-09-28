 <template>
  <div
    class="relative overflow-hidden lg:pb-[175px] pb-16 lg:pt-32 md:pt-20 pt-10"
  >
    <div
      class="container flex flex-col items-center justify-center relative z-10"
    >
      <p
        class="font-medium leading-130 text-green-300 text-center uppercase text-base sm:text-sm mb-3"
      >
        {{ $t('for_founds') }}
      </p>
      <i18n-t
        keypath="partners_who_support_us"
        tag="h2"
        style="line-height: 1.5"
        class="text-green-500 lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-130 font-bold text-center max-w-[666px]"
      >
        <template #store>
          <span
            class="text-white bg-green-300 rounded-xl px-2.5 shadow-partners mx-2"
          >
            {{ partnerCount }}
          </span>
        </template>
      </i18n-t>
      <p
        class="text-gray-200 text-center mt-6 text-base sm:text-sm leading-130"
      >
        {{ $t('with_us_you_are_the_best') }}
      </p>
    </div>
    <div class="flex flex-wrap gap-5 mt-8 mx-11 justify-center relative z-10">
      <PartnerCompanyCard
        v-for="item in partners"
        :item="item"
        :key="item.id"
      />
      <button
        v-if="partners.length >15"
        @click="fetchMoreCompany()"
        class="load-more py-2.5 pl-3 pr-4 flex items-center gap-2 bg-white rounded-40"
      >
        <i class="rounded-full bg-[#EBF7F1] p-1"
          ><svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 14H21.5"
              stroke="#27A44A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5 21V7"
              stroke="#27A44A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
        <p class="font-medium text-black-100">{{ $t('more') }}</p>
      </button>
    </div>
    <div
      class="container flex sm:gap-9 gap-3 mt-11 justify-center relative z-10"
    >
      <CommonButton
        @click="$emit('scroll')"
        label="for_contact"
        variant="primary"
        customButton="!px-[45px]"
      />
      <a :href="businePanel" target="_blank">
        <CommonButton label="get_with_us" variant="secondary" />
      </a>
    </div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
      <img src="/icons/Uzbekistan.svg" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import PartnerCompanyCard from '~/components/Card/PartnerCompany.vue'

const businePanel = import.meta.env.VITE_APP_BUSINESS_PANEL
defineEmits(['scroll'])

interface IPaginationResponse<T> {
  count: number
  next: string
  prev: string
  results: T[]
}

interface IPartner {
  count: number
  next: string
  prev: string
  results: []
}
const partnerParams = reactive({
  limit: 15,
  offset: 0,
  show_on_care_landing: true,
})
const partners = ref<IPartner[]>([])
const partnerCount = ref(0)

const fetchCompany = () => {
  return useApi()
    .$get<IPaginationResponse<IPartner>>(`care/api/v1/CompanyList/`, {
      params: partnerParams,
    })
    .then((res) => {
      partnerCount.value = res.count
      partners.value = [...partners.value, ...res.results]
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMoreCompany = () => {
  partnerParams.offset += partnerParams.limit
  fetchCompany()
}

onMounted(() => {
  fetchCompany()
})
</script>

<style scoped>
.load-more {
  box-shadow: 0px 10px 48px 0px rgba(16, 16, 16, 0.1);
}
</style>
