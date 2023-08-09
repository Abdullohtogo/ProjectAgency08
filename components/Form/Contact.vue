<template>
  <div class="">
    <div class="lg:py-[56px] md:py-20 sm:py-10 py-5 lg:px-8 md:px-6 px-4 bg-white rounded-3xl shadow-formCard">
      <h3 class="lg:text-3xl md:text-2xl text-xl text-black-100 font-semibold">Biz bilan bog’laning</h3>
      <p class="text-gray-200 sm:text-base text-sm">Sizni qiziqtirayotgan ma’lumotlar yoki savollaringiz bo‘lsa biz
        bilan bog‘lanishdan
        tortinmang</p>
      <div class="md:mt-5 sm:mt-4 mt-2 flex flex-col md:gap-6 sm:gap-4 gap-2">
        <Input label="Ismingiz" placeholder="To'liq ismingizni kiriting" type="text"/>
        <Input label="Telefon raqamingiz" type="text" src="/icons/flag.svg" maxlength="9">+998</Input>
        <div>
          <label for="" class="text-gray-200">Sizga qanday yordam bera olamiz?</label>
          <textarea
              class="custom-checkbox transition transition-300 md:h-[130px] sm:h-[100px] h-[80px] mt-2 bg-gray-300 sm:p-3 p-1.5 rounded-lg border border-transparent focus-within:border-green-400 outline-0 w-full caret-green-400 resize-none placeholder:text-sm"
              placeholder="Murojaatingizni kiriting..."></textarea>
        </div>
      </div>
      <div class="flex justify-between lg:gap-20 md:gap-10 gap-5 md:mt-5 sm:mt-3 mt-2">
        <div class="flex gap-2 items-center">
          <CommonCheckbox/>
          <p class="text-gray-200 sm:text-base text-sm">Ommaviy offerta qoidalarini qabul qilaman</p>
        </div>
        <CommonButton label="Yuborish" @click="clicked"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['open'])

function clicked() {
  emit('open')
}
</script>


<style>
input {
  transition: 300ms ease-in-out
}
input:focus::selection {
  background-color: #3490dc; /* Background color */
  color: white; /* Text color */
}

/* Style the caret when the input is focused and the cursor is at the beginning */
input:focus::selection,
input:focus::selection {
  background-color: #3490dc; /* Background color */
  color: white; /* Text color */
}


</style>