'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Reveal } from './reveal'

export function CTA() {
  return (
    <section
      id="book"
      className="relative flex min-h-[60vh] md:min-h-[80vh] items-center justify-center overflow-hidden py-16 md:py-28 lg:py-40"
    >
      {/* cinematic ink spreading background */}
      <div aria-hidden="true" className="absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 aspect-square w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.06] blur-[100px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-[30%] top-[40%] aspect-square w-[40vw] rounded-full bg-accent/10 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="grain absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 sm:px-5 text-center">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Agora aceitando agendamentos
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-none tracking-tight text-balance">
            Pronto Para Transformar Sua
            <br className="hidden sm:block" />
            Ideia em <span className="italic text-accent">Arte?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-base">
            Sessões limitadas abertas a cada mês. Envie seu conceito e vamos começar
            a projetar algo que dura a vida toda.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <a
            href="https://wa.me/15551234567?text=Hi%20INKHAUS%2C%20I%27d%20like%20to%20book%20a%20tattoo%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 sm:px-9 py-3 sm:py-4 text-sm font-medium tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            <MessageCircle className="size-5 transition-transform duration-300 group-hover:rotate-12" />
            Agendar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
