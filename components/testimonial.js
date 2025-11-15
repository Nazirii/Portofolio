'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VGZvBGbeFjjQleqriUmkPByCglmOQK.png"
              alt="Edward Collind"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="text-5xl text-yellow-400 font-serif">&ldquo;</div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Adams is a professional worker who always gives results that are beyond our expectations and always provides solutions to produce better products, thanks for your cooperation
            </p>

            <div>
              <h4 className="font-bold text-xl mb-1">Edward Collind</h4>
              <p className="text-gray-400">CTO of Segrais Inc</p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="p-2 border border-gray-600 rounded-lg hover:border-yellow-400 transition">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 bg-yellow-400 text-[#1a1a2e] rounded-lg hover:bg-yellow-300 transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
