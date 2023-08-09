<template>
  <div class="relative lg:mb-[200px] mb-[50px]">
    <div class="container relative z-10">
      <p class="font-medium leading-130 text-green-300 text-center uppercase text-base sm:text-sm mb-3">fondlar uchun</p>
      <h2 class="text-green-500 lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-130 font-bold text-center">
      <span class="sm:block sm:mb-4">Hozirgi kunda<span
          class="text-white bg-green-300 rounded-xl px-2.5 shadow-partners mx-2">10000</span>dan ortiq fondlar</span>
        biz bilan birga hamkorlik qilishmoqda
      </h2>
      <p class="text-gray-200 text-center mt-6 text-base sm:text-sm leading-130 ">
        Biz birlikda ishtirok etish va umumiy kuchlik qobiliyatiga e'tibor beramiz. Başqa xayriya fondlari bilan
        hamkorlik
        qilishimiz uchun andisha bilan inonamiz. Hamkorlik orqali natijalar qozonish va turli ijtimoiy muammolarni
        yechishga erishamiz, masalan, bolalar yordamini ta'minlash, mushkul holatdagi oilalarga yordam berish,
        ta'limning
        rivojlanishi va sog'liqni saqlashga yo'l ochish kabi.
      </p>
    </div>
    <div class="flex flex-wrap gap-5 mt-8 mx-11 justify-center relative z-10">
      <PartnerCompanyCard v-for="item in cards" :item="item" :key="item.id" class="last:cursor-pointer"/>
    </div>
    <div class="container flex sm:gap-9 gap-3 mt-11 justify-center relative z-10">
      <CommonButton label="Bog‘lanish" variant="primary"/>
      <CommonButton label="Bizning safimizga qo‘shilish" variant="secondary"/>
    </div>
    <div class="absolute top-[234px] left-[20%] z-0">
      <img src="/icons/Uzbekistan.svg" alt="">
    </div>
  </div>
</template>
<script setup lang="ts">
import PartnerCompanyCard from "~/components/Card/PartnerCompany.vue";

const cards = [
  {
    id: 1,
    text: 'Ona foundation',
    src: '/icons/partner-1.svg'
  },
  {
    id: 2,
    text: 'Zamin Foundation',
    src: '/icons/partner-2.svg'
  },
  {
    id: 3,
    text: 'Hayot - дом пиотмцев',
    src: '/icons/partner-3.svg'
  },
  {
    id: 4,
    text: 'Yoshlat Ishlari Agentligi',
    src: '/icons/partner-4.svg'
  },
  {
    id: 5,
    text: 'Mehrli qo‘llar',
    src: '/icons/partner-5.svg'
  },
  {
    id: 6,
    text: 'Yoshlat Ishlari Agentligi',
    src: '/icons/partner-6.svg'
  },
  {
    id: 7,
    text: 'Ezgu amal',
    src: '/icons/partner-7.svg'
  },
  {
    id: 8,
    text: 'Ezgu amal',
    src: '/icons/partner-7.svg'
  },
  {
    id: 9,
    text: 'UIC Hope',
    src: '/icons/partner-6.svg'
  },
  {
    id: 10,
    text: 'Yoshlat Ishlari Agentligi',
    src: '/icons/partner-5.svg'
  },
  {
    id: 11,
    text: 'Ona foundation',
    src: '/icons/partner-4.svg'
  },
  {
    id: 12,
    text: 'Hayot - дом пиотмцев',
    src: '/icons/partner-3.svg'
  },
  {
    id: 13,
    text: 'Yoshlat Ishlari Agentligi',
    src: '/icons/partner-4.svg'
  },
  {
    id: 14,
    text: 'Zamin Foundation',
    src: '/icons/partner-2.svg'
  },
  {
    id: 15,
    text: 'Ezgu amal',
    src: '/icons/partner-1.svg'
  },
  {
    id: 16,
    text: 'UIC Hope',
    src: '/icons/partner-1.svg'
  },
  {
    id: 17,
    text: 'Ещё 1023',
    url: '/',
    src: '/icons/partner+.svg'
  },
]
</script>