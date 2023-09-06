<template>
  <div>
    <LayoutHeader :white="true" class="fixed  w-full z-[1000000]" />
    <div class="md:pt-[88px] pt-[72px]">
      <slot></slot>
    </div>
    <LayoutFooter />
  </div>
</template>
