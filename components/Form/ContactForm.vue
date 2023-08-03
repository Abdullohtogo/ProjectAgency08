<template>
  <div class="py-[56px] px-8 bg-white rounded-3xl shadow-formCard">
    <h3 class="text-3xl text-black-100 font-semibold">Biz bilan bog’laning</h3>
    <p class="text-gray-200">Sizni qiziqtirayotgan ma’lumotlar yoki savollaringiz bo‘lsa biz bilan bog‘lanishdan
      tortinmang</p>
    <div class="mt-5 flex flex-col gap-6">
      <Input label="Ismingiz" placeholder="To'liq ismingizni kiriting" type="text"/>
      <Input label="Telefon raqamingiz" type="tel" src="/icons/flag.svg" maxlength="9">+998</Input>
      <Input label="Sizga qanday yordam bera olamiz?" type="text" placeholder="Murojaatingizni kiriting" class="h-[130px]"/>
    </div>
    <div class="flex justify-between gap-20 mt-5">
      <div class="flex gap-2 items-center">
        <input type="checkbox" class="bg-gray-300 w-8 h-6 border border-gray-500 rounded-md appearance-none checked:bg-green-300">
        <p class="text-gray-200">Ommaviy offerta qoidalarini qabul qilaman</p>
      </div>
      <ButtonVButton label="Yuborish"/>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>