import { MessageCircle, Mail, MapPin } from 'lucide-react'

function InstagramIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com', text: '@inkhaus.studio' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/15551234567',
    text: '+1 (555) 123-4567',
  },
  { icon: Mail, label: 'Email', href: 'mailto:studio@inkhaus.art', text: 'studio@inkhaus.art' },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16">
          <div className="lg:col-span-1">
            <span className="font-heading text-2xl font-semibold tracking-[0.2em]">
              INKHAUS
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Um atelier de tatuagem personalizado privado transformando histórias em arte permanente.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Conecte-se
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    <s.icon className="size-4 text-accent" strokeWidth={1.5} />
                    <span>{s.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Estúdio
            </h3>
            <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.5} />
              <span>
                48 Marrow Lane, Unit 3
                <br />
                Arts District, Lisbon
                <br />
                Apenas por agendamento
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Horário
            </h3>
            <ul className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4">
                <span>Ter – Sex</span>
                <span className="text-foreground">11 — 19</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sábado</span>
                <span className="text-foreground">12 — 17</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Dom – Seg</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} INKHAUS Studio. Todos os direitos reservados.</p>
          <p className="tracking-wide">Criado com permanência em mente.</p>
        </div>
      </div>
    </footer>
  )
}
