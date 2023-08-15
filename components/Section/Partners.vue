<template>
  <div class="relative lg:pb-[175px] pb-16 lg:pt-32 md:pt-20 pt-10">
    <div class="container relative z-10">
      <p
        class="font-medium leading-130 text-green-300 text-center uppercase text-base sm:text-sm mb-3"
      >
        fondlar uchun
      </p>
      <h2
        class="text-green-500 lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-130 font-bold text-center"
      >
        <span class="sm:block sm:mb-4"
          >Hozirgi kunda<span
            class="text-white bg-green-300 rounded-xl px-2.5 shadow-partners mx-2"
            >{{partnerCount}}</span
          >dan ortiq fondlar</span
        >
        biz bilan birga hamkorlik qilishmoqda
      </h2>
      <p
        class="text-gray-200 text-center mt-6 text-base sm:text-sm leading-130"
      >
        Biz birlikda ishtirok etish va umumiy kuchlik qobiliyatiga e'tibor
        beramiz. Başqa xayriya fondlari bilan hamkorlik qilishimiz uchun andisha
        bilan inonamiz. Hamkorlik orqali natijalar qozonish va turli ijtimoiy
        muammolarni yechishga erishamiz, masalan, bolalar yordamini ta'minlash,
        mushkul holatdagi oilalarga yordam berish, ta'limning rivojlanishi va
        sog'liqni saqlashga yo'l ochish kabi.
      </p>
    </div>
    <div class="flex flex-wrap gap-5 mt-8 mx-11 justify-center relative z-10">
      <PartnerCompanyCard
        v-for="item in partners"
        :item="item"
        :key="item.id"
        class="last:cursor-pointer"
      />
    </div>
    <div
      class="container flex sm:gap-9 gap-3 mt-11 justify-center relative z-10"
    >
      <CommonButton
        @click="$emit('scroll')"
        label="Bog‘lanish"
        variant="primary"
      />
      <a :href="businePanel" target="_blank">
        <CommonButton
          label="Bizning safimizga qo‘shilish"
          variant="secondary"
        />
      </a>
    </div>
    <div class="absolute top-[234px] left-[20%] z-0">
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
})
const partners = ref<IPartner[]>([])
const partnerCount = ref(0)

const fetchFaq = () => {
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

onMounted(() => {
  fetchFaq()
})
</script>
