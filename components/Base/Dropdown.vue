<template>
  <div
    class="relative"
    data-dropdown="0"
    tabindex="0"
    @focusout="handleFocusOut"
  >
    <div :class="headClass" @click="toggleShow">
      <slot name="head"></slot>
    </div>
    <transition name="dropdown" mode="out-in">
      <div
        v-show="showBody"
        :class="[bodyClass]"
        data-dropdown-body
        class="absolute right-0 w-max min-w-full translate-y-full bg-white rounded-md overflow-hidden -bottom-1 z-20 shadow-md border border-gray-900"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { TClassName } from '~/types/common'

interface Props {
  headClass?: TClassName
  bodyClass?: TClassName
  show?: boolean
  withTrigger?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  headClass: undefined,
  bodyClass: undefined,
})

interface Emits {
  (e: 'toggle', v: boolean): void
}
const emit = defineEmits<Emits>()

const showBody = ref(props.show ?? false)

function toggleShow() {
  if (!props.withTrigger) {
    if (typeof props.show === 'undefined') {
      showBody.value = !showBody.value
    } else {
      emit('toggle', !props.show)
    }
  }
}

function handleFocusOut(e: FocusEvent) {
  if (e?.target?.dataset?.dropdown) {
    if (typeof props.show === 'undefined') {
      showBody.value = false
    } else {
      emit('toggle', false)
    }
  }
}

watch(
  () => props.show,
  (v) => {
    showBody.value = v
  }
)
</script>

<style scoped>
@keyframes dropdown {
  0% {
    opacity: 0;
    bottom: -12px;
  }
  100% {
    opacity: 1;
    bottom: -4px;
  }
}

.dropdown-enter-active {
  animation: dropdown 0.3s ease-in-out;
}
.dropdown-leave-active {
  animation: dropdown 0.3s ease-in-out reverse;
}
</style>
