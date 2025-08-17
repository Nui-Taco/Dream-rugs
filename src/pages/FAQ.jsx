import { useTranslation } from 'react-i18next'

const QA = (t) => ([
  {q:t('faq.q1'), a:t('faq.a1')},
  {q:t('faq.q2'), a:t('faq.a2')},
  {q:t('faq.q3'), a:t('faq.a3')},
])

export default function FAQ(){
  const { t } = useTranslation()
  const data = QA(t)
  return (
    <section className="mt-4">
      <h1 className="mb-6">{t('faq.title')}</h1>
      <div className="space-y-4">
        {data.map((item, idx)=>(
          <details key={idx} className="card">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 small">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
