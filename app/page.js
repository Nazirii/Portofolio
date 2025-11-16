import Header from '@/components/header'
import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Testimonial from '@/components/testimonial'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  )
}
