<template>
  <section class="mt-[200px] container mx-auto">
    <div class="mx-auto">
      <p class="uppercase text-pink text-[14px] text-center font-semibold">
        Quality features
      </p>
      <h1 class="font-semibold lg:text-[36px] text-[28px] text-center">
        Amazing useful features
      </h1>
      <div
        class="grid md:grid-cols-2 grid-cols-1 sm:w-[480px] mt-[60px] gap-[60px] sm:mx-auto md:w-full"
      >
        <div class="flex gap-[16px]" v-for="(item, index) in items"
             :key="index">
          <img :src="item.img" alt="" class="lg:w-[100px] md:w-[80px]" />
          <div class="flex flex-col gap-4">
            <h3 class="font-bold">{{ item.name }}</h3>
            <p
              class="text-[13px] md:w-[200px] lg:text-[15px] xl:w-[430px] mx-1"
            >
              {{item.desc}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const items = [
  {
    img: '/icons/lightning.svg',
    name: 'Fast Performance',
    desc: 'Let’s just get this out of the way - there will always be a kit version of Eduflow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    img: '/icons/bag.svg',
    name: 'Partnership deal',
    desc: 'Let’s just get this out of the way - there will always be a kit version of Eduflow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    img: '/icons/crown.svg',
    name: 'Pro Subscription',
    desc: 'Let’s just get this out of the way - there will always be a kit version of Eduflow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    img: '/icons/messgae.svg',
    name: 'Customer Support',
    desc: 'Let’s just get this out of the way - there will always be a kit version of Eduflow. Paid subscriptions allow us to continue helping learners around the world.',
  },
]
</script>