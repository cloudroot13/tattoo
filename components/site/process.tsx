'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SectionHeading } from './section-heading'

const steps = [
  {
    num: '01',
    title: 'Consulta',
    description:
      'Nos sentamos para entender sua história, referências e intenção. Sem pressa — apenas uma conversa focada sobre o que você quer carregar para sempre.',
  },
  {
    num: '02',
    title: 'Obra de Arte Personalizada',
    description:
      'Sua peça é desenhada do zero, refinada através de revisões e adaptada ao fluxo natural do seu corpo antes de uma agulha tocar a pele.',
  },
  {
    num: '03',
    title: 'Sessão de Tatuagem',
    description:
      'Em um estúdio privado e estéril, trazemos a obra de arte à vida com técnica meticulosa e seu conforto no centro de tudo.',
  },
  {
    num: '04',
    title: 'Resultado Final',
    description:
      'Você sai com um plano de cuidados cicatrizados e uma peça de arte permanente — documentada, celebrada e uniquamente sua.',
  },
]

export function Process() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.from('.process-step', {
        opacity: 0,
        y: 60,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.process-list',
          start: 'top 75%',
        },
      })

      gsap.fromTo(
        '.process-line-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.process-list',
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: true,
          },
        },
      )
    },
    { scope: root },
  )

  return (
    <section id="process" className="relative py-16 md:py-28 lg:py-36" ref={root}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="O Processo"
          title={
            <>
              Da ideia ao <span className="italic text-accent">indelével</span>
            </>
          }
          description="Uma jornada deliberada de quatro etapas projetada para tornar a experiência tão significativa quanto o resultado."
        />

        <div className="process-list relative mt-16 pl-8 md:pl-0">
          {/* vertical line (mobile + desktop center) */}
          <div className="absolute left-1.25 top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <div className="process-line-fill h-full w-full origin-top bg-accent" />
          </div>

          <ol className="flex flex-col gap-14 md:gap-0">
            {steps.map((step, i) => (
              <li
                key={step.num}
                className={`process-step relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* node */}
                <span className="absolute -left-7.75 top-1.5 size-3 rounded-full border border-accent bg-background md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`flex flex-col gap-2 sm:gap-3 pb-6 md:pb-20 ${
                    i % 2 === 1 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'
                  }`}
                >
                  <span className="font-heading text-3xl sm:text-5xl md:text-6xl font-light text-accent/30">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-xl sm:text-3xl md:text-4xl font-light">
                    {step.title}
                  </h3>
                  <p
                    className={`max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground ${
                      i % 2 === 1 ? '' : 'md:ml-auto'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                <div className="hidden md:block" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
