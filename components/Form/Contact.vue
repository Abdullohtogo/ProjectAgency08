<template>
  <div class="">
    <div
      class="lg:py-[56px] md:py-20 sm:py-10 py-5 lg:px-8 md:px-6 px-4 bg-white rounded-3xl shadow-formCard"
    >
      <h3 class="lg:text-3xl md:text-2xl text-xl text-black-100 font-semibold">
        {{ $t('contact_with_us') }}
      </h3>
      <p class="text-gray-200 md:text-base sm:text-sm text-xs leading-120">
        {{ $t('if_you_have_question') }}
      </p>
      <form @submit.prevent="submitForm">
        <div class="md:mt-5 sm:mt-4 mt-2 flex flex-col md:gap-6 sm:gap-4 gap-2">
          <Input
            label="name"
            placeholder="full_name"
            type="text"
            :error="$v.name.$error"
            v-model="form.name"
          />
          <ClientOnly>
            <Input
              label="phone_num"
              type="phone"
              placeholder=""
              v-model="form.phoneNumber"
              src="/icons/flag.svg"
              v-maska="'## ### ## ##'"
              :error="$v.phoneNumber.$error"
              >+998</Input
            >
          </ClientOnly>
          <div>
            <label for="" class="text-gray-200">{{
              $t('how_can_we_help_you')
            }}</label>
            <textarea
              v-model="form.message"
              :maxlength="500"
              :error="$v.message.$error"
              :class="$v.message.$error ? '!border-red' : ''"
              class="custom-checkbox transition transition-300 md:h-[130px] sm:h-[100px] h-[80px] mt-2 bg-gray-300 sm:p-3 p-1.5 rounded-lg border border-transparent focus-within:border-green-400 outline-0 w-full caret-green-400 resize-none placeholder:text-sm"
              :placeholder="$t('write_issue')"
            ></textarea>
          </div>
        </div>
        <div
          class="flex flex-wrap justify-between md:gap-6 gap-5 md:mt-[21px] sm:mt-4 mt-3"
        >
          <div class="">
            <CommonCheckbox
              v-model="form.agreement"
              :label-start="'user_terms'"
              :label="'agreements_for'"
              :error="$v.agreement.$error"
            />
          </div>
          <CommonButton :type="'submit'" :label="'send'" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { reactive, ref } from 'vue'

const name = ref('')
const phone_number = ref('')
const message = ref('')

interface IContactForm {
  name?: string
  phoneNumber?: string
  message?: string
  agreement?: boolean
}

const form = reactive<IContactForm>({
  name: '',
  phoneNumber: '',
  message: '',
  agreement: false,
})

const isTrue = (val: boolean) => {
  return val === true
}

const validPhones = [
  '90',
  '91',
  '33',
  '50',
  '93',
  '94',
  '88',
  '95',
  '97',
  '98',
  '99',
  '77',
]

const isValidPhone = (val: string) => {
  const phone = val.replace(/[\s)(-]/g, '')
  return phone.length === 9 && validPhones.includes(phone.substring(0, 2))
}
const rules = {
  phoneNumber: {
    required,
    isValidPhone,
  },
  name: {
    required,
  },
  message: {
    required,
  },
  agreement: {
    required,
    isTrue,
  },
}

const $v = useVuelidate<IContactForm>(rules, form)

const emit = defineEmits(['open'])
const submitForm = () => {
  $v.value.$touch()
  if ($v.value.$invalid) {
    console.log($v.value.$error)
  } else {
    console.log('success')
    useApi()
      .$post('care/api/v1/landing/CareFeedbackCreate/', {
        body: {
          phone_number: `+998${form?.phoneNumber.replace(/ /g, '')}`,
          full_name: form?.name,
          message: form?.message,
        },
      })
      .then((res) => {
        console.log(res)
      })
      .finally(() => {
        form.agreement = false
        form.message = ''
        form.name = ''
        form.phoneNumber = ''
        $v.value.$reset()
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
    emit('open')
  }
}
</script>

<style>
input {
  transition: 300ms ease-in-out;
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
