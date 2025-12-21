'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = [8, 2, 1]
    const duration = 2000
    const steps = 60
    const increment = targets.map(target => target / steps)

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCounts(prev => 
        prev.map((_, index) => 
          Math.min(Math.floor(increment[index] * currentStep), targets[index])
        )
      )

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, duration / steps)
  }
  const services = [
    {
      image: '/icon/fe.png',
      title: 'Front End Developer',
      projects: '1 Project'
    },
    {
      image: '/icon/mobile.png',
      title: 'Mobile App Develop',
      projects: '1 Project'
    },
    {
      image: '/icon/fullstack.png',
      title: 'Fullstack Developer',
      projects: '2 Project'
    },
    {
      image: '/icon/be.png',
      title: 'Backend Developer',
      projects: '2 Project'
    },
    {
      image: '/images/game.jpg',
      title: 'Game Development',
      projects: '1 Project'
    },
    {
      image: '/images/ai.png',
      title: 'Applied AI/ ML Projects',
      projects: '2 Project'
    }
  ]

  const stats = [
    { label: 'Project' },
    { label: 'Applied AI/ ML Projects' },
   
    { label: 'Large-Scale Government Website Project' },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-12 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            What Can I Do For Your Needs
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Expertise across multiple development domains with proven results
          </p>

          {/* Stats Row - Simple Text */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">
                  {counts[index]}+
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services - Simple List */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center max-md:hidden"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-card rounded-full border border-border hover:border-primary hover:bg-muted transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                {service.title}
              </span>
              <span className="text-muted-foreground text-xs ml-2">({service.projects})</span>
            </div>
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden overflow-x-auto pb-2 -mx-4 px-4"
        >
          <div className="flex gap-2 min-w-max">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-card rounded-full border border-border hover:border-primary hover:bg-muted transition-all cursor-pointer group shadow-sm whitespace-nowrap"
              >
                <span className="text-foreground font-medium text-xs group-hover:text-primary transition-colors">
                  {service.title}
                </span>
                <span className="text-muted-foreground text-[10px] ml-1">({service.projects})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
