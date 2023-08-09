<template>
  <div>
    <div class="bg-white rounded-xl p-5">
      <div class="mb-2 flex justify-end">
        <img src="/icons/close.svg" alt="" @click="close" class="hover:cursor-pointer">
      </div>
      <div class="flex flex-col items-center">
        <img src="/icons/success.svg" alt="">
        <h2 class="md:text-2xl text-l text-black-100 font-medium leading-120 md:mt-7 md:mb-3 mt-3 mb-2 text-center">Sizning murojaatingiz qabul qilindi</h2>
        <p class="text-gray-200 md:text-base text-sm leading-130 md:mb-8 mb-4 text-center">Mutahasislarimiz murojaatingizni o’rganib chiqishi bilan
          siz bilan bog’lanamiz</p>
        <CommonButton label="Ortga qaytish" variant="darker" @click="close"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>()

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

watch(
    () => props.show,
    (first) => {
      if (process.client) {
        const body = document.body;

        if (body) {
          if (first) {
            body.style.overflow = "hidden";
          } else {
            body.style.overflow = "auto";
          }
        }
      }
    },
    {
      immediate: true,
    }
);

</script>