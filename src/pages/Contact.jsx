import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t } = useTranslation()

  return (
    <section className="grid md:grid-cols-2 gap-8 mt-4">
      <div>
        <h1 className="mb-4">{t('contact.title')}</h1>
        <p className="mb-6">{t('contact.subtitle')}</p>

        <form
  action="https://formsubmit.co/739e36c7e5c70fbaee664a25f7b90f73"
  method="POST"
  encType="multipart/form-data"
>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="small">{t('contact.firstName')}</span>
              <input name="firstName" required className="w-full card" />
            </label>
            <label className="block">
              <span className="small">{t('contact.lastName')}</span>
              <input name="lastName" required className="w-full card" />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="small">{t('contact.country')}</span>
              <input name="country" required className="w-full card" />
            </label>
            <label className="block">
              <span className="small">{t('contact.email')}</span>
              <input type="email" name="email" required className="w-full card" />
            </label>
          </div>
          <label className="block">
            <span className="small">{t('contact.message')}</span>
            <textarea name="message" rows="4" className="w-full card" placeholder={t('contact.messagePh')}></textarea>
          </label>
          <label className="block">
            <span className="small">{t('contact.attach')}</span>
            <input type="file" name="attachment" accept="image/*" className="w-full card" />
          </label>
          <button className="btn btn-primary">
            {t('contact.send')}
          </button>
        </form>

        <div className="mt-8 small opacity-80">
          <p>{t('contact.companyName')}</p>
          <p>{t('contact.companyAddress')}</p>
          <p>{t('contact.companyEmail')}</p>
        </div>
      </div>
      <div className="card">
        <img className="rounded-xl" src="https://images.unsplash.com/photo-1600585154340-1e0a2f936730?q=80&w=1200&auto=format&fit=crop" alt="Showroom" />
      </div>
    </section>
  )
}
