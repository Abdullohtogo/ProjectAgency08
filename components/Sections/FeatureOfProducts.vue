<template>
  <section class="mt-[120px] md:mt-36 sm:mt-[150px] mb-[180px] md:mx-10 ">
    <div class="w-full">
      <p class="text-center text-pink md:text-[16px] text-[13.5px] uppercase font-semibold">Whats the function</p>
      <h2 class="md:text-[36px] text-2xl text-center font-semibold">Meet the feature of product</h2>
    </div>
    <div class="lg:flex grid md:grid-cols-2 lg:gap-2 justify-center gap-6 md:gap-0 md:mx-auto md:w-[710px] lg:w-full mt-[50px] items-center" >
      <div class="flex flex-row md:flex-col md:gap-0 gap-1" v-for="(item,index) in items" :key="index">
        <img :src="item.img" class="md:mt-[70px] w-[100px] mt-[40px] " alt=""/>
        <div>
          <h3 class="text-18px font-bold mt-9 md:mt-0">{{item.name}}</h3>
          <p class="mt-[20px] xl:text-[15px] xl:w-[264px] xl:mt-[20px] md:w-[200px] md:text-[13px] sm:text-[15px] sm:w-[264px] w-[200px] text-[13px]">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const items = [
  {
    img:'/icons/lightning.svg',
    name:'Fast Performance',
    desc:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    img:'/icons/bag.svg',
    name:'Partnership deal',
    desc:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    img:'/icons/crown.svg',
    name:'Pro Subscription',
    desc:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    img:'/icons/messgae.svg',
    name:'Customer Support',
    desc:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
]
</script>