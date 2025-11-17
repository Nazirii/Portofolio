'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#353543] lg:h-[85vh] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6  lg:w-[50vw] z-19 mt-13"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-yellow-400 md:text-7xl text-3xl  font-semibold mb-2">I&apos;m</p>
              <h1 className="text-5xl md:text-[110px] font-bold mb-4 w-full">
                Adib Naziri
              </h1>
              <div className="w-30 h-1 bg-yellow-400"></div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:text-gray-400 text-white text-lg leading-relaxed lg:max-w-xs"
            >
              A motivated student driven by curiosity and a strong passion for programming, always eager to learn, build, and grow.
            </motion.p>

            {/* Student Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start gap-3 pt-2"
            >
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
            </motion.div>
        
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className=" h-96 md:h-full absolute md:left-[33%] md:bottom-20 z-1 group left-60 md:z-20 bottom-10"
          >
            <img 
              src="\images\NAZIRI.png"
              alt="adib naziri"
              className="w-full h-full object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-30 cursor-pointer"
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block absolute right-65 top-20 z-10 space-y-4 max-w-[17rem]"
          >
            <p className="text-gray-400 text-sm font-semibold">Services</p>
            <h2 className="text-xl font-semibold text-white leading-8 tracking-wide">
              Let&apos;s build quality products in programming  with my services
            </h2>
            <a href="#services" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:gap-3 transition-all">
              show more <span>→</span>
            </a>
            <div className="pt-4">
              <a 
                href="/cv/Adib_Naziri_CV.pdf" 
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition font-semibold "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='absolute bg-[#272833] rounded-full w-100 h-100 md:w-[500px] md:h-[500px] left-1/2 top-4/10 -translate-x-1/2 -translate-y-1/2 z-0'></div>
    </section>
  )
}
