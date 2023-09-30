import { CONFIG } from '@/config'

export default async () => {
  const data = await fetch(
    `${CONFIG.BASE_URL}common/api/v1/FrontendTranslation/ru/?source=care_frontoffice`
  )
  return await data.json()
}
