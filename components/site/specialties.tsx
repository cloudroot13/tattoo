'use client'

import { motion } from 'framer-motion'
import { Brush, PenLine, Aperture, Waves, Hexagon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

const specialties = [
  {
    icon: Brush,
    title: 'Blackwork',
    description:
      'Preto sólido audacioso, padrões ornamentais e espaço negativo impressionante projetado para chamar atenção.',
  },
  {
    icon: PenLine,
    title: 'Fine Line',
    description:
      'Trabalho delicado de agulha única — botânicos, script e símbolos minimalistas renderizados com precisão cirúrgica.',
  },
  {
    icon: Aperture,
    title: 'Realism',
    description:
      'Retratos em preto e cinza fotorrealistas e vida selvagem com profundidade, textura e sombreamento realista.',
  },
  {
    icon: Waves,
    title: 'Japanese',
    description:
      'Narrativa irezumi tradicional — koi, dragões e ondas com contornos ousados e composição fluida.',
  },
  {
    icon: Hexagon,
    title: 'Geometric',
    description:
      'Geometria sagrada, mandalas e trabalho de pontos óptico construído sobre perfeita simetria e estrutura limpa.',
  },
]

export function Specialties() {
  return (
    <section
      id="specialties"
      className="relative border-y border-border bg-card/40 py-16 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Disciplinas"
          title={
            <>
              Maestria em <span className="italic text-accent">cinco estilos</span>
            </>
          }
          description="Cada estilo é abordado como arte fina — adaptado ao seu corpo, sua história e sua intenção."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {specialties.map((s) => (
            <motion.article
              key={s.title}
              variants={staggerItem}
              className="group relative flex flex-col gap-4 sm:gap-5 bg-card p-6 sm:p-8 md:p-10 transition-colors duration-500 hover:bg-secondary"
            >
              <div className="flex size-10 sm:size-12 items-center justify-center rounded-full border border-border text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="size-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-light">{s.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
              <span className="mt-auto h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}

          <div className="hidden flex-col justify-center gap-3 bg-card p-8 md:p-10 lg:flex">
            <p className="font-heading text-2xl font-light italic text-muted-foreground">
              Não vê sua visão aqui?
            </p>
            <a
              href="#book"
              className="text-sm tracking-wide text-accent underline-offset-4 hover:underline"
            >
              Vamos criar algo original →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
