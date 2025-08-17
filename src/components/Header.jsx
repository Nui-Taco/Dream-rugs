import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'

export default function Header(){
  const { t, i18n } = useTranslation()
  const changeLng = (lng) => i18n.changeLanguage(lng)
  const nav = [
    {to:'/gallery', label:t('nav.gallery')},
    {to:'/about', label:t('nav.about')},
    {to:'/contact', label:t('nav.contact')},
    {to:'/faq', label:t('nav.faq')},
    {to:'/admin', label:'Admin'}
  ]
  const langs = ['en','de','ru','es','th']
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Dream rugs home">
          <img src={logo} alt="Dream rugs logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-1">
          {nav.map(n=>(
            <NavLink key={n.to} to={n.to} className={({isActive})=>`nav-link ${isActive?'bg-black/5':''}`}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <select aria-label="Language" className="nav-link border border-black/10"
            value={i18n.resolvedLanguage} onChange={e=>changeLng(e.target.value)}>
            {langs.map(l=><option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
    </header>
  )
}
