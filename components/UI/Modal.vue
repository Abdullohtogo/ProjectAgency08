<template>
  <div>
    <div class="bg-white rounded-2xl">
      <div
        class="pt-4 pb-2.5 lg::px-6 md:px-5 px-4 flex items-center justify-between border-b border-green-100"
      >
        <p class="font-semibold leading-130 text-black-100">
          {{ $t('share') }}
        </p>
        <span
          @click="close"
          class="icon-close hover:cursor-pointer text-2xl leading-130 text-gray-200"
        />
      </div>
      <div class="flex flex-col items-center lg:px-5 md:px-4 px-3 pb-5 pt-[30px]">
        <p class="text-sm font-medium leading-130 mb-4">
          {{ $t('share_on_socials') }}
        </p>
        <div class="flex items-center  lg:gap-6 md:gap-5 gap-4 sm:gap-y-4 gap-y-3 sm:justify-start justify-center flex-wrap">
          <button
            v-tooltip.top="'Facebook'"
            @click="shareCount(), share('facebook')"
          >
            <i
              ><svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="46"
                  height="46"
                  rx="23"
                  fill="#1877F2"
                  fill-opacity="0.12"
                />
                <path
                  d="M37 23.0856C37 15.3064 30.7319 9 23 9C15.2681 9 9 15.3063 9 23.0856C9 30.116 14.1196 35.9434 20.8125 37V27.1572H17.2578V23.0856H20.8125V19.9823C20.8125 16.4521 22.9027 14.5022 26.1005 14.5022C27.6322 14.5022 29.2344 14.7773 29.2344 14.7773V18.2436H27.4691C25.7298 18.2436 25.1875 19.3294 25.1875 20.4434V23.0856H29.0703L28.4496 27.1572H25.1875V37C31.8804 35.9434 37 30.1161 37 23.0856Z"
                  fill="#1877F2"
                />
              </svg>
            </i>
          </button>
          <button
            v-tooltip.top="'X (Twitter)'"
            @click="shareCount(), share('twitter')"
            href=""
          >
            <i>
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="46"
                  height="46"
                  rx="23"
                  fill="#090E14"
                  fill-opacity="0.06"
                />
                <path
                  d="M23 9C19.2878 9 15.7244 10.4759 13.1016 13.1005C10.476 15.7261 9.00073 19.2869 9 23C9 26.7115 10.4766 30.275 13.1016 32.8995C15.7244 35.5241 19.2878 37 23 37C26.7122 37 30.2756 35.5241 32.8984 32.8995C35.5234 30.275 37 26.7115 37 23C37 19.2885 35.5234 15.725 32.8984 13.1005C30.2756 10.4759 26.7122 9 23 9Z"
                  fill="#090E14"
                />
                <path
                  d="M15.1635 15.5L21.3512 23.7734L15.1245 30.5001H16.526L21.9776 24.6107L26.3822 30.5001H31.1512L24.6152 21.7614L30.4111 15.5H29.0096L23.9891 20.9239L19.9325 15.5H15.1635ZM17.2245 16.5322H19.4153L29.09 29.4679H26.8991L17.2245 16.5322Z"
                  fill="white"
                />
              </svg>
            </i>
          </button>
          <button
            v-tooltip.top="'Telegram'"
            @click="shareCount(), share('telegram')"
            href=""
          >
            <i
              ><svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="46"
                  height="46"
                  rx="23"
                  fill="#2BACEE"
                  fill-opacity="0.12"
                />
                <path
                  d="M23 9C19.2878 9 15.7244 10.4759 13.1016 13.1005C10.476 15.7261 9.00073 19.2869 9 23C9 26.7115 10.4766 30.275 13.1016 32.8995C15.7244 35.5241 19.2878 37 23 37C26.7122 37 30.2756 35.5241 32.8984 32.8995C35.5234 30.275 37 26.7115 37 23C37 19.2885 35.5234 15.725 32.8984 13.1005C30.2756 10.4759 26.7122 9 23 9Z"
                  fill="url(#paint0_linear_2660_3756)"
                />
                <path
                  d="M15.031 22.5965C19.0583 20.762 21.7432 19.5526 23.0856 18.9682C26.923 17.2997 27.7194 17.0099 28.2395 17.0001C28.3539 16.9982 28.6086 17.0277 28.7747 17.1682C28.9129 17.2867 28.9517 17.447 28.9711 17.5595C28.9884 17.6719 29.0122 17.928 28.9927 18.128C28.7855 20.412 27.8855 25.9546 27.428 28.5128C27.2359 29.5952 26.8539 29.9581 26.4848 29.9936C25.682 30.0707 25.0733 29.4393 24.2964 28.9068C23.0813 28.0734 22.395 27.5547 21.2144 26.7416C19.8504 25.8018 20.7353 25.2852 21.5122 24.4411C21.7151 24.2201 25.2503 20.8584 25.3172 20.5535C25.3259 20.5154 25.3345 20.3732 25.2525 20.2982C25.1726 20.2231 25.0539 20.2488 24.9676 20.2691C24.8446 20.298 22.9043 21.6404 19.1403 24.2962C18.59 24.692 18.0914 24.885 17.6425 24.8748C17.1504 24.8638 16.2008 24.5833 15.495 24.3436C14.6317 24.0495 13.9433 23.894 14.0037 23.3945C14.0339 23.1345 14.3771 22.8684 15.031 22.5965Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2660_3756"
                    x1="1409"
                    y1="9"
                    x2="1409"
                    y2="2809"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                  </linearGradient>
                </defs>
              </svg>
            </i>
          </button>
          <button
            v-tooltip.top="'Whatsapp'"
            @click="shareCount(), share('whatsapp')"
            href=""
          >
            <i
              ><svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="46"
                  height="46"
                  rx="23"
                  fill="#60D669"
                  fill-opacity="0.12"
                />
                <path
                  d="M9.1167 22.3783C9.11602 24.736 9.75775 27.0381 10.978 29.0672L9 36L16.3907 34.1397C18.4349 35.208 20.7253 35.7678 23.0527 35.7679H23.0589C30.7423 35.7679 36.9967 29.766 37 22.3889C37.0015 18.8142 35.5526 15.4527 32.9202 12.9238C30.2883 10.395 26.7879 9.00163 23.0583 9C15.374 9 9.11998 15.0016 9.11681 22.3783"
                  fill="url(#paint0_linear_2660_3760)"
                />
                <path
                  d="M8.12121 22.3695C8.12042 24.9021 8.78504 27.3745 10.0486 29.5537L8 37L15.6545 35.0019C17.7636 36.1467 20.1382 36.7503 22.5545 36.7512H22.5607C30.5185 36.7512 36.9966 30.304 37 22.381C37.0014 18.5412 35.5006 14.9304 32.7746 12.2142C30.0483 9.49834 26.4233 8.00158 22.5607 8C14.6016 8 8.12438 14.4463 8.12121 22.3695ZM12.6796 29.1784L12.3938 28.7268C11.1924 26.8249 10.5582 24.6271 10.5591 22.3704C10.5617 15.7848 15.9453 10.4269 22.5653 10.4269C25.7711 10.4283 28.7839 11.6724 31.05 13.9298C33.316 16.1873 34.5629 19.1883 34.5621 22.3801C34.5591 28.9656 29.1754 34.3242 22.5607 34.3242H22.556C20.4021 34.323 18.2898 33.7472 16.4476 32.659L16.0092 32.4002L11.4669 33.5858L12.6796 29.1783V29.1784Z"
                  fill="url(#paint1_linear_2660_3760)"
                />
                <path
                  d="M19.5593 16.6039C19.3013 16.0297 19.0297 16.0181 18.7843 16.008C18.5833 15.9994 18.3536 16 18.1241 16C17.8944 16 17.5212 16.0865 17.2057 16.4314C16.8899 16.7766 16 17.6109 16 19.3076C16 21.0044 17.2343 22.6442 17.4064 22.8745C17.5787 23.1044 19.7893 26.6977 23.2905 28.0801C26.2002 29.2289 26.7923 29.0004 27.4238 28.9428C28.0555 28.8854 29.4619 28.1088 29.7488 27.3034C30.0359 26.4982 30.0359 25.808 29.9499 25.6638C29.8638 25.5201 29.6341 25.4338 29.2896 25.2614C28.945 25.0889 27.2516 24.2546 26.9359 24.1395C26.6201 24.0245 26.3904 23.9671 26.1607 24.3124C25.931 24.6572 25.2714 25.4338 25.0703 25.6638C24.8695 25.8943 24.6684 25.923 24.3241 25.7505C23.9794 25.5775 22.8701 25.2138 21.554 24.039C20.53 23.1248 19.8387 21.996 19.6377 21.6506C19.4368 21.3059 19.6162 21.119 19.7889 20.9471C19.9437 20.7926 20.1335 20.5444 20.3059 20.3431C20.4776 20.1417 20.535 19.998 20.6498 19.768C20.7648 19.5378 20.7072 19.3364 20.6213 19.1639C20.535 18.9914 19.8656 17.2858 19.5593 16.6039Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2660_3760"
                    x1="1409"
                    y1="2709"
                    x2="1409"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1FAF38" />
                    <stop offset="1" stop-color="#60D669" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2660_3760"
                    x1="1458"
                    y1="2908"
                    x2="1458"
                    y2="8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F9F9" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </i>
          </button>
        </div>
        <div class="h-[1px] w-full bg-gray-100 my-5" />
        <ClibBoard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClibBoard from '@/components/UI/ClibBoard.vue'

interface Props {
  show: boolean
  id: string
}
const props = defineProps<Props>()

function shareCount() {
  useApi()
    .$post('care/api/v1/ProjectShare/', {
      body: {
        project: props.id,
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      if (err?.status === 500) {
        console.log('server_error')
      }
      if (err?.status === 403) {
        console.log('u_need_to_auth')
      }
      console.log(err)
    })
}
const share = (network: string) => {
  if (process.client) {
    switch (network) {
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${link.value}&text=help`,
          '_blank'
        )
        break
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=help\n\n+${link.value}`,
          '_blank'
        )
        break
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${link.value}`,
          '_blank'
        )
        break
      case 'whatsapp':
        window.open(
          `https://api.whatsapp.com/send?text=help\n${link.value}`,
          '_blank'
        )
        break
    }
  }
}
const link = ref(
  `${window.location.origin}/c/${props.id}/comments?comment=${props.id}`
)

const emit = defineEmits(['close'])

function close() {
  emit('close')
  document.body.style.overflow = 'auto'
}

watch(
  () => props.show,
  (first) => {
    if (process.client) {
      const body = document.body

      if (body) {
        if (first) {
          body.style.overflow = 'hidden'
        } else {
          body.style.overflow = 'auto'
        }
      }
    }
  },
  {
    immediate: true,
  }
)
</script>
