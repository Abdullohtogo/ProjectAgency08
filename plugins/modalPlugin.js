import { ModalPlugin } from 'vue3-use-modal';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ModalPlugin);
})