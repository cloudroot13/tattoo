'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from './reveal'

const stats = [
  { value: '14', label: 'Anos de prática' },
  { value: '2.4k', label: 'Peças criadas' },
  { value: '9', label: 'Prêmios da indústria' },
]

const credentials = [
  'Membro, Guilda Internacional de Tatuadores Personalizados',
  'Certificado em Patógenos Transmitidos por Sangue & Esterilização',
  'Destaque — Anuário Inkology 2023 & 2024',
  'Melhor Preto & Cinza, Expo Nacional de Tatuagens',
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div
            ref={ref}
            className="relative aspect-4/5 overflow-hidden rounded-xl border border-border"
          >
            <motion.div
              style={{ y }}
              className="absolute inset-0 top-[-8%] h-[116%]"
            >
              <Image
                src="/artist-portrait.png"
                alt="Retrato do artista de tatuagem no estúdio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale-20"
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="font-heading text-2xl font-light">
                Rowan Vale
              </p>

              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Fundador & Artista Principal
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-accent">
              <span className="h-px w-8 bg-accent/60" />
              O Artista
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-5xl">
              Tinta como uma linguagem para as coisas que as palavras não conseguem guardar.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Por mais de uma década, Rowan tratou tatuagem como uma disciplina
                de arte plástica — combinando desenho clássico, uma obsessão pela
                composição e um profundo respeito pela história de cada cliente.
                O que começou como cadernos cheios de ideias inquietas se tornou
                um atelier privado onde cada peça é construída do zero.
              </p>

              <p>
                O trabalho abrange blackwork audacioso a fine line sussurrante,
                mas a filosofia nunca muda: arte que você se orgulhará de usar
                para a vida toda.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-6 border-y border-border py-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-4xl font-light text-foreground">
                    {s.value}
                  </p>

                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="flex flex-col gap-2.5">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}