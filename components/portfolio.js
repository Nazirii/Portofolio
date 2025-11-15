'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Portfolio() {
  const portfolioProjects = [
    {
      id: 1,
      type: 'Mobile App Design',
      title: 'Travel Mobile App',
      image: '/travel-mobile-app.png',
      caseStudy: true
    },
    {
      id: 2,
      type: 'Web Design',
      title: 'Real Estate Landing Page',
      image: '/real-estate-landing-page.jpg',
      caseStudy: true
    },
    {
      id: 3,
      type: 'Web Design',
      title: 'Coffe Shop Website',
      image: '/coffee-shop-website.png',
      caseStudy: true
    },
    {
      id: 4,
      type: 'Mobile App Design',
      title: 'Sneakers Store App',
      image: '/sneakers-store-app-design.jpg',
      caseStudy: true
    },
    {
      id: 5,
      type: 'Mobile App Design',
      title: 'Hotel Booking App',
      image: '/hotel-booking-app-design.jpg',
      caseStudy: true
    },
    {
      id: 6,
      type: 'Web Design',
      title: 'Coworking Space Website',
      image: '/coworking-space-website-design.jpg',
      caseStudy: true
    }
  ]

  return (
    <section id="portfolio" className="py-20 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-3">My Best Selected Portfolio</h2>
          <p className="text-gray-400">The following are the best portfolios during the career path as a Freelancer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-yellow-400 text-sm font-medium">{project.type}</p>
                  {project.caseStudy && (
                    <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-medium cursor-pointer hover:gap-2 transition">
                      Case Study
                      <ArrowRight size={16} />
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-gray-900 transition">
            More Portfolio
          </button>
        </div>

     
      </div>
    </section>
  )
}
