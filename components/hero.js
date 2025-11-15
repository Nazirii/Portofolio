'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#353543] lg:h-[85vh] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
          <div className="space-y-6  lg:w-[50vw] z-19 mt-13">
            <div >
              <p className="text-yellow-400 text-7xl font-semibold mb-2">I&apos;m</p>
              <h1 className="text-5xl md:text-[110px] font-bold mb-4 w-full">
                Adib Naziri
              </h1>
              <div className="w-30 h-1 bg-yellow-400"></div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed lg:max-w-xs">
              A freelancer who provides services for digital programming and design content needs, for all businesses with more than 10 years of experience
            </p>

            {/* Student Info */}
            <div className="flex items-start gap-3 pt-2">
              <div className="bg-yellow-400 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Student at Universitas Gadjah Mada</p>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Yogyakarta, Indonesia
                </p>
              </div>
            </div>
        
          </div>

          <div className=" h-96 md:h-full absolute left-[33%] bottom-20 z-20">
            <img 
              src="\images\NAZIRI.png"
              alt="adib naziri"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="hidden lg:block absolute right-65 top-20 z-30 space-y-4 max-w-[17rem]">
            <p className="text-gray-400 text-sm font-semibold">Services</p>
            <h2 className="text-xl font-semibold text-white leading-8 tracking-wide">
              Let&apos;s build quality products in programming and design with my services
            </h2>
            <a href="#services" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:gap-3 transition-all">
              show more <span>→</span>
            </a>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#3a3a4a] flex items-center justify-center text-yellow-400 hover:bg-[#4a4a5a] transition">
                f
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#3a3a4a] flex items-center justify-center text-yellow-400 hover:bg-[#4a4a5a] transition">
                🐦
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#3a3a4a] flex items-center justify-center text-yellow-400 hover:bg-[#4a4a5a] transition">
                📷
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#3a3a4a] flex items-center justify-center text-yellow-400 hover:bg-[#4a4a5a] transition">
                📌
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bg-[#272833] rounded-full w-[500px] h-[500px] left-1/2 top-4/10 -translate-x-1/2 -translate-y-1/2 z-0'></div>
    </section>
  )
}
