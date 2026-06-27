import { Reveal } from './reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div
      className={`flex max-w-2xl flex-col gap-4 ${
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start'
      }`}
    >
      <Reveal>
        <span className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-accent">
          <span className="h-px w-6 sm:w-8 bg-accent/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
