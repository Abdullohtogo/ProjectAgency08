<template>
  <div>
    <button @click="showModal = true"  class="bg-gray-200 p-4 rounded-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><img src="/icons/play-button.png" alt="" class="w-6"></button>
    <div v-if="showModal" class="modal">
      <div class="mt-20">
        <span class="close" @click="showModal = false">&times;</span>
        <video width="1000" height="240" controls>
          <source src="/videos/video.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style>
/* Style the modal */
.modal {
  //display: block;
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.close {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  float: right;
  //transform: translateX(20px) translateY(-15px);
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>