<template>
  <div class="md:mx-11 mx-5 grid lg:grid-cols-3 md:grid-cols-2 flex-wrap gap-7">
    <CardMain v-for="item in cards" :item="item" :key="item.id" />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';

import {advantageInfo} from "~/data/advantageCard";

const cards = computed(() => advantageInfo())
</script>
