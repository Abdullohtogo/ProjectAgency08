import { CONFIG } from '@/config'

export default async () => {
  const data = await fetch(
    `${CONFIG.BASE_LANG_URL}common/api/v1/FrontendTranslation/kaa/?source=care_frontoffice`
  )
  return await data.json()
}
