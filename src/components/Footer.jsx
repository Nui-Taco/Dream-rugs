import { useTranslation } from 'react-i18next'

export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="mt-12 border-t border-black/5">
      <div className="max-w-6xl mx-auto p-6 small flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Dream rugs</p>
        <p>{t('footer.made')}</p>
      </div>
    </footer>
  )
}
