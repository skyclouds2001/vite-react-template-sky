import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import zhCN from './locales/zh-CN.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'zh-CN': {
        translation: zhCN,
      },
    },
    fallbackLng: 'zh-CN',
    supportedLngs: ['zh-CN'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
