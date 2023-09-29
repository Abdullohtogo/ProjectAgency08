<template>
  <div>
    <div
      class="w-full border-2 bg-green-500 border-[#27A44A] p-2.5 relative rounded-xl qr"
      :class="{
        '!bg-white  !max-w-[180px] !max-h-[180px]': light,
        'w-[107px] h-[107px]': dark,
      }"
    >
      <QRCanvas :options="options" style="width: 100%; height: 100%" />
      <img
        src="@/public/icons/heart.png"
        alt="qr code"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%]"
        :class="{ 'w-14 h-14': light, 'w-12 h-12': dark }"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  light?: boolean
  dark?: boolean
}

defineProps<Props>()
import { QRCanvas } from 'qrcanvas-vue'
import { ref } from 'vue'

const image = new Image()
image.src = '/icons/heart.png'

const options = ref({
  cellSize: 12,
  data: import.meta.env.VITE_APP_APP_STORE,
  logo: image,
})
</script>
<style>
.qr {
  box-shadow: 0px 4.279999732971191px 20px 0px rgba(39, 164, 74, 0.3);
}
</style>
