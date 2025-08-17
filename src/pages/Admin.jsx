import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const STORAGE_KEY = 'galleryItems'

function readStore(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  }catch{ return [] }
}
function saveStore(items){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export default function Admin(){
  const { t } = useTranslation()
  const [authed, setAuthed] = useState(false)
  const [items, setItems] = useState(readStore())
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [cat, setCat] = useState('logo')
  const [error, setError] = useState('')

  useEffect(()=>{ saveStore(items) },[items])

  const login = (e)=>{
    e.preventDefault()
    const pwd = e.target.password.value
    const expected = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'
    if(pwd === expected){ setAuthed(true) } else { setError('Wrong password') }
  }

  const upload = async (e)=>{
    e.preventDefault()
    if(!file){ setError('Select an image'); return }
    const reader = new FileReader()
    reader.onload = ()=>{
      const dataUrl = reader.result
      const id = Date.now()
      const next = [{id, title, cat, img:dataUrl}, ...items]
      setItems(next)
      setFile(null); setTitle(''); setCat('logo'); setError('')
    }
    reader.readAsDataURL(file)
  }

  const remove = (id)=> setItems(items.filter(i=>i.id!==id))

  if(!authed){
    return (
      <section className="max-w-md mx-auto mt-8 card">
        <h1 className="mb-4">Admin</h1>
        <form onSubmit={login} className="space-y-3">
          <input name="password" type="password" placeholder="Password" className="w-full card"/>
          <button className="btn btn-primary">Sign in</button>
          {error && <p className="small text-red-600">{error}</p>}
          <p className="small opacity-70">Demo: default password is <code>admin123</code>. Configure <code>VITE_ADMIN_PASSWORD</code> at build time.</p>
          <p className="small opacity-70">Note: This demo stores items in your browser (localStorage). For real uploads we will connect cloud storage (e.g. Supabase/S3) next.</p>
        </form>
      </section>
    )
  }

  return (
    <section className="mt-4">
      <h1 className="mb-4">Admin – Gallery uploads (demo)</h1>
      <form onSubmit={upload} className="card space-y-3 max-w-xl">
        <label className="block">
          <span className="small">Title</span>
          <input className="w-full card" value={title} onChange={e=>setTitle(e.target.value)} required />
        </label>
        <label className="block">
          <span className="small">Category</span>
          <select className="w-full card" value={cat} onChange={e=>setCat(e.target.value)}>
            <option value="logo">Logo</option>
            <option value="sport">Sport</option>
            <option value="text">Text</option>
            <option value="animals">Animals</option>
            <option value="custom">Custom</option>
            <option value="more">More</option>
          </select>
        </label>
        <label className="block">
          <span className="small">Image</span>
          <input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]||null)} className="w-full card"/>
        </label>
        <button className="btn btn-primary">Add to gallery</button>
        {error && <p className="small text-red-600">{error}</p>}
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {items.map(it=>(
          <figure key={it.id} className="card">
            <img src={it.img} alt={it.title} className="rounded-xl w-full h-56 object-cover"/>
            <figcaption className="mt-2 font-medium">{it.title} <span className="small opacity-60">({it.cat})</span></figcaption>
            <button className="btn mt-2" onClick={()=>remove(it.id)}>Remove</button>
          </figure>
        ))}
      </div>
    </section>
  )
}
