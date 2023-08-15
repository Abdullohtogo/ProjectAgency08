<template>
  <div class="md:mx-11 mx-5 bg-white rounded-36 pt-11">
    <div class="container">
      <div class="flex items-center justify-center flex-col">
        <p class="font-medium text-green-300 text-center uppercase mb-3">
          {{ $t('project_goal') }}
        </p>
        <i18n-t
          keypath="get_helped_to_resp_by"
          tag="h2"
          class="text-green-500 lg:text-4xl md:text-3xl text-xl font-bold text-center max-w-[806px]"
        >
          <template #store>
            <span class="text-white bg-green-300 rounded-xl px-2.5">
              {{ $t('hissa') }}
            </span>
          </template>
        </i18n-t>
      </div>
      <div
        class="flex md:justify-between md:flex-row flex-col-reverse items-center"
      >
        <div class="md:basis-2/3 md:-translate-x-[100px] md:translate-y-[72px]">
          <img src="/images/project-aim.png" class="-mb-[10px]" alt="aim" />
        </div>
        <div class="md:basis-5/12 mt-5 md:mt-0 text-center md:text-left">
          <h3 class="text-green-500 md:text-2xl text-xl font-bold leading-130">
            {{ $t('funds_and_their_projects_follow_up') }}
          </h3>
          <p class="mt-4 text-gray-400 md:text-base text-sm leading-130">
            {{ $t('follow_philanthropic_foundations') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
