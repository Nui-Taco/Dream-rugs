import { useTranslation } from 'react-i18next'

export default function About(){
  const { t } = useTranslation()
  return (
    <section className="prose max-w-none">
      <h1>{t('about.title')}</h1>
      <p>{t('about.p1')}</p>
      <p>{t('about.p2')}</p>
      <img className="rounded-2xl border border-black/5 shadow-sm my-6" src="https://images.unsplash.com/photo-1523419409543-0c1cd3a3a67f?q=80&w=1200&auto=format&fit=crop" alt="Workshop" />
      <p>{t('about.p3')}</p>
    </section>
  )
}
