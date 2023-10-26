<template>
  <div class="container h-full flex items-center flex-col lg:py-[72px] md:py-16 sm:py-12 py-9">
    <div class="h-full flex flex-col justify-center items-center">
      <img src="/icons/404.svg" alt="404" class="relative z-10" />
      <div
        class="max-w-[430px] flex flex-col items-center w-full space-y-6 mt-9"
      >
        <div class="space-y-2 text-center mb-6">
          <h1
            class="text-2xl lg:text-3.5xl text-dark font-semibold leading-130"
          >
            {{ $t('no_page') }}
          </h1>
          <p class="text-base text-gray-700 font-normal leading-130">
            {{ $t('sorry_there_is_no_page_like_this') }}
          </p>
        </div>
        <CommonButton
          label="go_back_main"
          variant="secondary"
          customButton="!gap-1"
          class="w-full"
          @click="$router.push('/')"
        >
          <template #before>
            <img src="/icons/home.svg" alt="" />
          </template>
        </CommonButton>
      </div>
    </div>
  </div>
</template>
