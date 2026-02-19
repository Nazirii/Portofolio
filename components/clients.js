'use client'

import { motion } from 'framer-motion'

export default function Clients() {
  const clients = [
    { name: 'UGM', logo: '/icon/UGM.png' },
    { name: 'TED', logo: '/icon/ted.svg' },
    { name: 'Kementrian LH', logo: '/icon/kemenlh.png' },
    // { name: 'RDK', logo: '/icon/rdk.png' },
    { name: 'GDGOC', logo: '/icon/gdgoc.png' },
  ]

  return (
    <section className="relative md:-mt-20 z-40 -mt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#40404D] rounded-lg p-8 shadow-xl"
        >
          <div className="grid grid-cols-4 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div 
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 flex-col md:flex-row"
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xl hidden md:block font-bold text-white">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
