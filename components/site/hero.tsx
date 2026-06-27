'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function IntroSequence({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-[#020202]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.9, duration: 0.7, ease: 'easeInOut' }}
      onAnimationComplete={onDone}
    >
      {/* falling ink drop */}
      <motion.span
        className="absolute left-1/2 top-0 h-6 w-3 -translate-x-1/2 rounded-full bg-foreground"
        initial={{ y: '-12vh', scaleY: 1.6, opacity: 0 }}
        animate={{
          y: ['-12vh', '46vh', '50vh'],
          opacity: [0, 1, 1],
          scaleY: [1.8, 1.2, 0.6],
        }}
        transition={{ duration: 0.9, ease: 'easeIn', times: [0, 0.85, 1] }}
      />

      {/* ink splat expanding */}
      <motion.div
        className="absolute left-1/2 top-1/2 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 4, 60], opacity: [0, 1, 1] }}
        transition={{ delay: 0.85, duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        style={{ filter: 'blur(0.4px)' }}
      />

      {/* logo revealed through the ink (knockout) */}
      <motion.span
        className="relative z-10 font-heading text-4xl font-semibold tracking-[0.4em] text-[#020202] md:text-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 0, 1], scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      >
        INKHAUS
      </motion.span>
    </motion.div>
  )
}

function Particles() {
  const [dots, setDots] = useState<
    { id: number; left: number; top: number; size: number; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    setDots(
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 6 + 5,
        delay: Math.random() * 5,
      })),
    )
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-foreground/40"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animation: `ink-float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [introDone, setIntroDone] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 160])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AnimatePresence>
        {!introDone && <IntroSequence onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      {/* ambient ink glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Particles />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:mb-7 sm:px-4"
        >
          Atelier de Tatuagem Personalizada
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, filter: 'blur(16px)', y: 24 }}
          animate={introDone ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl font-light leading-[1] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Transformando Histórias
          <br />
          Em <span className="italic text-accent">Arte Permanente</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-base md:text-lg"
        >
          Tatuagens personalizadas e exclusivas projetadas para expressar sua identidade — criadas com precisão obsessiva em um estúdio privado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:gap-4 sm:flex-row"
        >
          <a
            href="#book"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Agendar Sessão
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#portfolio"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Ver Portfólio
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-border p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-muted-foreground"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
