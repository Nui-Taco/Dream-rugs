import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './translations/en.json'
import de from './translations/de.json'
import ru from './translations/ru.json'
import es from './translations/es.json'
import th from './translations/th.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en:{translation:en}, de:{translation:de}, ru:{translation:ru}, es:{translation:es}, th:{translation:th} },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: { order: ['navigator','htmlTag','cookie','localStorage','path','subdomain'] }
  })

export default i18n
