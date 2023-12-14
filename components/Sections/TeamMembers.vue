<template>
  <section class="container mx-auto">
    <header>
      <h2
        class="uppercase text-pink text-sm !leading-[285%] text-center font-semibold mb-0.5"
      >
        Our team
      </h2>
      <p
        class="font-bold text-[25px] sm:text-[30px] md:text-[36px] text-center mb-[30px] max-w-[589px] mx-auto"
      >
        The most qualified and talented individuals
      </p>
    </header>

    <div class="grid grid-cols-3">
      <article v-for="(member, index) in members" :key="index">
          <div
            class="mt-[50px] border-md flex hover:shadow-xl transition-all card mb-[150px] md:gap-0 gap-2 mx-auto"
          >
            <div class="w-[150px] mx-auto mt-5 card-item transition-all">
              <img
                :src="member?.img"
                alt=""
                class="mx-auto lg:w-[100px] xl:w-full"
              />
              <h3
                class="text-center font-semibold sm:text-[22px] sm:mt-[25px] mt-[15px] text-[18px]"
              >
                {{ member?.name }}
              </h3>
              <p class="text-center sm:text-[16px] text-[14px] pb-5">
                {{ member?.desc }}
              </p>
            </div>
            <div
              class="flex-col gap-2 sm:translate-x-[340px] sm:translate-y-[170px] xl:translate-x-[340px] xl:translate-y-[170px] translate-x-[270px] translate-y-[120px] lg:translate-x-[270px] lg:translate-y-[120px] hidden socials absolute"
            >
              <img src="/icons/facebook.svg" alt="" class="cursor-pointer" />
              <img src="/icons/twitter.svg" alt="" class="cursor-pointer" />
              <img src="/icons/instagram.svg" alt="" class="cursor-pointer" />
            </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
const members = [
  {
    img: '/members/Saimon.svg',
    name: 'S. Harmer',
    desc: 'Ceo And Founder',
  },
  {
    img: '/members/Lina%20Jutila.svg',
    name: 'Lina Jutila',
    desc: 'Web Developer',
  },
  {
    img: '/members/Aaron%20Nunez.svg',
    name: 'Aaron Nunez',
    desc: 'Web Designer',
  },
  {
    img: '/members/Aaron%20Nunez2.svg',
    name: 'Aaron Nunez',
    desc: 'Web Designer',
  },
  {
    img: '/members/Aaron%20Nunez3.svg',
    name: 'Aaron Nunez',
    desc: 'Web Designer',
  },
  {
    img: '/members/Aaron%20Nunez4.svg',
    name: 'Aaron Nunez',
    desc: 'Web Designer',
  },
]
</script>
