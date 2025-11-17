'use client'

import { 
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiNestjs, SiLaravel, SiPhp,
  SiFlutter, SiKotlin, SiSwift, 
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiDocker, SiGit,
  SiPython, SiJavascript, SiUnity, SiGodotengine
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { FaJava, FaGamepad } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function TechStack() {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      techs: [
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      techs: [
        { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
        { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
        { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
        { name: 'Python', Icon: SiPython, color: '#3776AB' },

      ]
    },
    {
      title: 'Game Development',
      color: 'from-red-500 to-pink-500',
      techs: [
        { name: 'Java', Icon: FaJava, color: '#ED8B00' },
        { name: 'LibGDX', Icon: FaGamepad, color: '#E74C3C' },
       
      ]
    },
    
    {
      title: 'Mobile',
      color: 'from-purple-500 to-pink-500',
      techs: [
        { name: 'React Native', Icon: TbBrandReactNative, color: '#61DAFB' },
        { name: 'Kotlin', Icon: SiKotlin, color: '#7F52FF' },
        
      ]
    },
    {
      title: 'Database & Tools',
      color: 'from-orange-500 to-red-500',
      techs: [
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
        { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
        { name: 'Git', Icon: SiGit, color: '#F05032' }
      ]
    }
  ]

  return (
    <section id="techstack" className="py-16 bg-[#272833] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-semibold uppercase tracking-wide">
              Technologies
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">Tech Stack & Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern technologies and frameworks I use to build scalable and efficient solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2a2a3a] rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.techs.map((tech, idx) => {
                  const Icon = tech.Icon
                  return (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-all cursor-pointer group/item"
                    >
                      <div className="relative">
                        <div 
                          className="absolute inset-0 blur-md opacity-0 group-hover/item:opacity-50 transition-opacity" 
                          style={{ backgroundColor: tech.color }}
                        />
                        <Icon 
                          className="text-2xl relative z-10 group-hover/item:scale-110 transition-transform duration-300" 
                          style={{ color: tech.color }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
