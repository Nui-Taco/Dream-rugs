import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CATEGORIES = ['logo','sport','text','animals','custom','more']

const SAMPLE = [
  { id:1, title:'Team Logo 01', cat:'logo', img:'https://picsum.photos/seed/logo1/800/600' },
  { id:2, title:'Team Logo 02', cat:'logo', img:'https://picsum.photos/seed/logo2/800/600' },
  { id:3, title:'Football Field', cat:'sport', img:'https://picsum.photos/seed/sport1/800/600' },
  { id:4, title:'Basketball Court', cat:'sport', img:'https://picsum.photos/seed/sport2/800/600' },
  { id:5, title:'Typography Rug', cat:'text', img:'https://picsum.photos/seed/text1/800/600' },
  { id:6, title:'Forest Animals', cat:'animals', img:'https://picsum.photos/seed/animals1/800/600' },
  { id:7, title:'Custom Shape', cat:'custom', img:'https://picsum.photos/seed/custom1/800/600' },
  { id:8, title:'Other Style', cat:'more', img:'https://picsum.photos/seed/more1/800/600' },
]

function readStore(){
  try{
    const raw = localStorage.getItem('galleryItems')
    return raw ? JSON.parse(raw) : []
  }catch{ return [] }
}

export default function Gallery(){
  const { t } = useTranslation()
  const [tab, setTab] = useState('logo')
  const [extra, setExtra] = useState([])

  useEffect(()=>{ setExtra(readStore()) },[])

  const itemsAll = [...extra, ...SAMPLE]
  const items = itemsAll.filter(i=>i.cat===tab)

  return (
    <section className="mt-4">
      <h1 className="mb-4">{t('gallery.title')}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map(c=>(
          <button key={c}
            onClick={()=>setTab(c)}
            className={`nav-link border ${tab===c?'bg-black/5 border-accent':'border-black/10'}`}>
            {t(`gallery.tabs.${c}`)}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(card=>(
          <figure key={card.id} className="card">
            <img src={card.img} alt={card.title} className="rounded-xl w-full h-56 object-cover" />
            <figcaption className="mt-3 font-medium">{card.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
