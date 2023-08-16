<template>
  <div class="container h-full flex items-center flex-col py-10">
    <div class="h-full flex flex-col justify-center items-center py-16">
      <img src="/icons/404.svg" alt="404" class="relative z-10" />
      <div
        class="max-w-[430px] flex flex-col items-center w-full space-y-6 mt-9"
      >
        <div class="space-y-2 text-center mb-6">
          <h1
            class="text-2xl lg:text-3.5xl text-dark font-semibold leading-130"
          >
            Sahifa mavjud emas
          </h1>
          <p class="text-base text-gray-700 font-normal leading-130">
            Sahifa o‘chirib yuborilgan yoki siz noto‘g‘ri havola orqali sahifaga
            o‘tdingiz
          </p>
        </div>
        <CommonButton
          label="Asosiyga qaytish"
          variant="secondary"
          customButton="!gap-1"
          class="w-full"
          @click="$router.push('/')"
        >
          <template #before>
            <img src="/icons/home.svg" alt="" />
          </template>
        </CommonButton>
        <NuxtLink to="/" class="inline-block">
          <CommonButton
            icon-position="left"
            icon="icon-home text-white text-xl"
            :text="$t('back_to_home')"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
