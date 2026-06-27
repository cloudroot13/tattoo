import { SiteNav } from '@/components/site/site-nav'
import { Hero } from '@/components/site/hero'
import { Portfolio } from '@/components/site/portfolio'
import { Specialties } from '@/components/site/specialties'
import { Process } from '@/components/site/process'
import { Testimonials } from '@/components/site/testimonials'
import { About } from '@/components/site/about'
import { CTA } from '@/components/site/cta'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Portfolio />
      <Specialties />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <SiteFooter />
    </main>
  )
}
