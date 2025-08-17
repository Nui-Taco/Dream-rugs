import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Admin from './pages/Admin'
import { useTranslation } from 'react-i18next'

export default function App(){
  const { t } = useTranslation()
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function Home(){
  const { t } = useTranslation()
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center mt-6">
      <div>
        <h1 className="mb-4">{t('home.title')}</h1>
        <p className="mb-6">{t('home.subtitle')}</p>
        <div className="flex gap-3">
          <Link to="/gallery" className="btn btn-primary">{t('home.ctaGallery')}</Link>
          <Link to="/contact" className="btn">{t('home.ctaContact')}</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop" alt="Carpet" className="rounded-xl"/>
      </div>
    </section>
  )
}
