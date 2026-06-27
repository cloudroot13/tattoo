'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

const testimonials = [
  {
    name: 'Mara Solveig',
    image: '/clients/client-1.png',
    rating: 5,
    review:
      'A experiência de tatuagem mais considerada que já tive. Cada linha se sentia intencional — parece uma peça que encomendei, não apenas fiz.',
    work: 'Fine Line · Botânico',
  },
  {
    name: 'Idris Vance',
    image: '/clients/client-2.png',
    rating: 5,
    review:
      'Cheguei com um fragmento de uma ideia e sai com arte que nunca poderia ter imaginado. O processo de design personalizado está em outro nível.',
    work: 'Blackwork · Meio Braço',
  },
  {
    name: 'Lena Ardrey',
    image: '/clients/client-3.png',
    rating: 5,
    review:
      'Calmo, privado e obsessivamente preciso. O estúdio parece mais uma galeria do que uma loja. Já agendei minha segunda sessão.',
    work: 'Realismo · Retrato',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-y border-border bg-card/40 py-16 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Vozes dos Clientes"
          title={
            <>
              Confiado com suas <span className="italic text-accent">histórias</span>
            </>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 md:mt-16 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="flex flex-col gap-4 sm:gap-6 rounded-lg sm:rounded-xl border border-border bg-foreground/3 p-5 sm:p-8 backdrop-blur-md transition-colors duration-500 hover:border-accent/40"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-heading text-lg sm:text-xl font-light leading-snug text-foreground/90">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-5">
                <div className="relative size-12 overflow-hidden rounded-full">
                  <Image
                    src={t.image || "/placeholder.svg"}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs tracking-wide text-muted-foreground">{t.work}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
