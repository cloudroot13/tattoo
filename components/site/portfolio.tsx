'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './section-heading'

type Category = 'Blackwork' | 'Fine Line' | 'Realismo' | 'Japonês' | 'Geométrico'

type Work = {
  src: string
  title: string
  category: Category
  description: string
  tall?: boolean
}

const works: Work[] = [
  {
    src: '/tattoos/blackwork-2.png',
    title: 'Obsidian Field',
    category: 'Blackwork',
    description: 'Abstração preta sólida com uso de espaço negativo',
    tall: true,
  },
  {
    src: '/tattoos/fineline-1.png',
    title: 'Botanic Whisper',
    category: 'Fine Line',
    description: 'Estudo botânico com agulha única',
  },
  {
    src: '/tattoos/realism-1.png',
    title: 'Quiet Portrait',
    category: 'Realismo',
    description: 'Fotorrealismo em preto e cinza',
  },
  {
    src: '/tattoos/japanese-1.png',
    title: 'Koi Ascending',
    category: 'Japonês',
    description: 'Manga tradicional irezumi',
    tall: true,
  },
  {
    src: '/tattoos/geometric-1.png',
    title: 'Sacred Symmetry',
    category: 'Geométrico',
    description: 'Composição de mandala em dotwork',
  },
  {
    src: '/tattoos/blackwork-1.png',
    title: 'Ornamental Vow',
    category: 'Blackwork',
    description: 'Padrões ornamentais densos',
  },
  {
    src: '/tattoos/realism-2.png',
    title: 'Apex',
    category: 'Realismo',
    description: 'Fauna detalhada em preto e cinza',
    tall: true,
  },
  {
    src: '/tattoos/fineline-2.png',
    title: 'Script & Symbol',
    category: 'Fine Line',
    description: 'Letreiramento minimalista e motivos',
  },
  {
    src: '/tattoos/japanese-2.png',
    title: 'Dragon Current',
    category: 'Japonês',
    description: 'Contorno audacioso com sombreamento em cinza',
  },
  {
    src: '/tattoos/geometric-2.png',
    title: 'Optical Drift',
    category: 'Geométrico',
    description: 'Interação entre linhas e sombreamento',
  },
]

const filters: ('Tudo' | Category)[] = [
  'Tudo',
  'Blackwork',
  'Fine Line',
  'Realismo',
  'Japonês',
  'Geométrico',
]

export function Portfolio() {
  const [active, setActive] = useState<'Tudo' | Category>('Tudo')
  const visible = active === 'Tudo' ? works : works.filter((w) => w.category === active)

  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28 lg:py-36">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col justify-between gap-6 md:gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Trabalho Selecionado"
            title={
              <>
                Uma galeria de
                <br />
                <span className="italic text-accent">arte viva</span>
              </>
            }
          />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border px-3 sm:px-4 py-1.5 sm:py-2 text-xs tracking-wide transition-all duration-300 ${
                  active === f
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 gap-3 sm:gap-4 md:gap-5 sm:columns-2 lg:columns-3 *:mb-3 sm:*:mb-4 md:*:mb-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((work) => (
              <motion.article
                key={work.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative block break-inside-avoid overflow-hidden rounded-md border border-border bg-card"
              >
                <div className={`relative w-full overflow-hidden ${work.tall ? 'aspect-3/4' : 'aspect-square'}`}>
                  <Image
                    src={work.src || "/placeholder.svg"}
                    alt={`${work.title} — ${work.category} tatuagem`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale-35 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  {/* ink-mask reveal overlay */}
                  <div className="absolute inset-0 origin-bottom scale-y-100 bg-linear-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    {work.category}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-light leading-tight">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {work.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
