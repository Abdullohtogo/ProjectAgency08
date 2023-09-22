<template>
  <div class="bg-white/90 h-full rounded-2xl project">
    <div class="py-2 pl-3 flex items-center gap-2">
      <block-pre-loader
        loading
        width="32px"
        height="32px"
        class="rounded-full"
      />
      <block-pre-loader loading width="100px" height="20px" />
    </div>

    <div class="block relative">
      <block-pre-loader
        loading
        width="100%"
        height="140px"
        shimmer-class="!rounded-none"
      />
    </div>

    <div class="flex flex-col justify-between p-3 pb-4 md:min-h-[305px]">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1.5">
          <block-pre-loader
            v-for="i in 1"
            :key="i"
            loading
            width="100%"
            height="24px"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <block-pre-loader loading width="25%" height="20px" />
            <block-pre-loader loading width="25%" height="20px" />
          </div>

          <div class="flex items-center justify-between">
            <block-pre-loader loading width="20%" height="20px" />
            <block-pre-loader loading width="30%" height="20px" />
          </div>
        </div>

        <div class="flex flex-col gap-[6px]">
          <div class="w-full h-2 rounded my-2">
            <block-pre-loader loading width="100%" height="8px" />
          </div>

          <div class="flex items-center gap-1">
            <block-pre-loader loading width="100px" height="20px" />
          </div>
        </div>
      </div>

      <div>
        <block-pre-loader loading width="100%" height="45px" />
        <span class="block w-full h-[1px] bg-gray-300 my-3" />
        <div class="flex items-center justify-between">
          <div class="flex gap-1 items-center cursor-pointer">
            <block-pre-loader loading width="60px" height="25px" />
          </div>

          <div class="flex gap-3 items-center">
            <div class="flex gap-1 items-center">
              <block-pre-loader loading width="50px" height="25px" />
            </div>

            <div class="flex gap-1 items-center">
              <block-pre-loader loading width="50px" height="25px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
