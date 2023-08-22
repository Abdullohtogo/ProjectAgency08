
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
    '20',
]
export const isValidPhone = (val: string) => {
    const phone = val.replace(/[\s)(-]/g, '')
    return phone.length === 9 && validPhones.includes(phone.substring(0, 2))
}

export function formatMoneyWithSpace(number: string | number) {
    return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function formatPhoneNumber(number: string) {
    const format = number
      ?.replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
    return `+${format && format[1] ? format[1] : ''}
      ${format && format[2] ? format[2] : ''}
      ${format && format[3] ? format[3] : ''}
      ${format && format[4] ? format[4] : ''}${
      format && format[5] ? format[5] : ''
    }`
  }