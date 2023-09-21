<template>
  <transition :key="loading" name="skeleton" mode="out-in">
    <div
      v-if="loading"
      key="loading"
      class="shrink-0"
      :style="{
        height: height,
        width: width,
        margin: margin,
        borderRadius: borderRadius,
        style,
      }"
      :class="['skeleton-wrapper', preloaderClass, { dark: dark }]"
    >
      <span
        class="skeleton"
        :style="[{ borderRadius: borderRadius }, shimmerStyles]"
        :class="shimmerClass"
      />
    </div>
    <template v-else>
      <slot />
    </template>
  </transition>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
    height: {
      type: String,
      default: () => '200px',
    },
    width: {
      type: String,
      default: () => '400px',
    },
    borderRadius: {
      type: String,
      default: () => '',
    },
    preloaderClass: {
      type: String,
      default: () => '',
    },
    circle: {
      type: Boolean,
    },
    shimmerClass: {
      type: String,
      default: () => '',
    },
    duration: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    shimmerStyles() {
      return {
        '--width': this.width,
        '--height': this.height,
        '--border-radius': this.circle
          ? '100px'
          : this.borderRadius
          ? this.borderRadius
          : '4px',
        '--skeleton-duration': this.duration ? this.duration + 's' : '1s',
      }
    },
  },
}
</script>
<style>
:root {
  --border-radius: 4px;
  --skeleton-duration: 1s;
}

.skeleton {
  background-color: #dae0e8;
  background-image: linear-gradient(
    90deg,
    #dae0e8 0%,
    #f0f3f7 49.48%,
    #dae0e8 100%
  );
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  position: relative;
  animation-duration: var(--skeleton-duration);
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
}

.dark .skeleton {
  background: linear-gradient(90deg, #2f3d5b 0%, #435479 49.48%, #2f3d5b 100%);
}
@keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.skeleton-enter-active,
.skeleton-leave-active {
  transition: all 0.1s ease-out;
}
.skeleton-enter,
.skeleton-leave-to {
  opacity: 0;
}
</style>
