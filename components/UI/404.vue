<template>
  <div class="container h-full flex items-center flex-col py-10">
    <div class="h-full flex flex-col justify-center items-center py-16">
      <div class="relative mx-10">
        <img
          src="/svg/vector-404.svg"
          alt="vector"
          class="absolute -top-8 left-0 z-0"
        />
        <img src="/svg/404.svg" alt="404" class="relative z-10" />
      </div>
      <div
        class="max-w-[430px] flex flex-col items-center w-full space-y-6 mt-9"
      >
        <div class="space-y-2 text-center">
          <h1
            class="text-2xl lg:text-3.5xl text-dark font-semibold leading-130"
          >
            {{ $t('404_title') }}
          </h1>
          <p class="text-base text-gray-700 font-normal leading-130">
            {{ $t('404_subtitle') }}
          </p>
        </div>
        <NuxtLink to="/" class="inline-block">
          <UIButton
            icon-position="left"
            icon="icon-home text-white text-xl"
            :text="$t('back_to_home')"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
