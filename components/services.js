'use client'

import { ArrowRight } from 'lucide-react'

export default function Services() {
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
      projects: '1 Project'
    },
    {
      image: '/icon/be.png',
      title: 'Backend Developer',
      projects: '2 Project'
    },
    {
      image: '/images/game.jpg',
      title: 'Game Development',
      projects: '24 Project'
    }
  ]

  const stats = [
    { value: '250+', label: 'Project Completed' },
    { value: '100+', label: 'Community Network' },
    { value: '30+', label: 'Contract Remote' },
    { value: '10+', label: 'Years Experience' }
  ]

  return (
    <section id="services" className="py-20 bg-[#272833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                What Can I Do For<br />Your Needs
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-[#2a2a3a] rounded-lg overflow-hidden hover:bg-[#3a3a4a] transition-all border border-transparent hover:border-yellow-400">
                  <div className="aspect-video bg-gray-700 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.projects}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
