'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import { ArrowRight, Grid3X3, CircleDot, ChevronLeft, ChevronRight, X, ExternalLink, Github, Figma } from 'lucide-react'

export default function Portfolio() {
  const [isAnimatedMode, setIsAnimatedMode] = useState(true)
  const [rotation, setRotation] = useState(0)
  const [selectedProject, setSelectedProject] = useState(0)
  const [returningProject, setReturningProject] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [modalProject, setModalProject] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 768)
    
    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const typeColors = {
    'Full Stack Web Development': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500' },
    'Frontend Web Development': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500' },
    'Backend Web Development': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500' },
    'Mobile App Development': { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500' },
    'Game Development': { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500' },
  }

  const statusColors = {
    'Complete': { bg: 'bg-green-500', text: 'text-white' },
    'Ongoing': { bg: 'bg-yellow-500', text: 'text-gray-900' },
    'Maintenance': { bg: 'bg-blue-500', text: 'text-white' },
  }

  const portfolioProjects = [
    {
      id: 1,
      type: 'Full Stack Web Development',
      title: 'Administration Web of CV.Harum Manis',
      image: '/images/HARUMMANIS.png',
      description: 'A simple yet functional administration system built for the UMKM CV Harum Manis to manage daily operations efficiently.',
      fullDescription: 'This was my first real-world project: a complete administration system developed for the UMKM CV Harum Manis. The system supports essential operational workflows such as inventory tracking, sales recording, and data management. Built using PHP Native, the project focuses on usability, reliability, and helping the business digitize its manual processes.',
      techStack: ['Next.js', 'React', 'Node.js', 'MySql', 'Tailwind CSS', 'Express.js'],
      role: 'Full Stack Developer',
      status: 'Complete',
      githubUrl: 'https://github.com/Nazirii/harum-manis',
      caseStudy: true
    },
    {
  id: 2,
  type: 'Game Development',
  title: 'Florwyn',
  image: '/images/Florwyn.png',
  description: 'A fast-paced 2D action platformer built with Java and LibGDX, featuring responsive controls and dynamic level design.',
  fullDescription: 'Florwyn is a 2D action platformer developed with Java and LibGDX. The game features fast-paced combat, fluid character movement, and handcrafted levels. While using free assets for visuals, the core gameplay systems—movement, physics, enemy AI, collision, and level handling—are fully programmed from scratch. This project focuses on gameplay feel, performance, and clean code architecture.',
  techStack: ['Java', 'LibGDX', 'Tiled', 'Free Game Assets'],
  role: 'Game Developer',
  status: 'Complete',
  githubUrl: 'https://github.com/Nazirii/Florwyn',
  caseStudy: true
},
 {
  id: 3,
  type: 'Frontend Web Development',
  title: 'Tech Enthusiast Day',
  image: '/images/ted.png',
  description: 'A modern event website for a national-scale technology competition, featuring registration, schedules, and speaker information.',
  fullDescription: 'Tech Enthusiast Day is a national-scale technology competition organized by the IPTEK Division under the Student Association of the Department of Electrical Engineering and Informatics, Vocational College, Universitas Gadjah Mada. For the 2025 theme, “Techvolution: Innovate. Digitize. Impact.”, I developed a modern and fully responsive event website that reflects the transformative journey of technology. The platform includes participant registration, schedule management, speaker profiles, and event highlights, built with React, Tailwind CSS, Framer Motion, and Next.js.',
  techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
  role: 'Frontend Developer',
  status: 'Complete',
  githubUrl: 'https://github.com/Ghanz08/TED-2025',
  caseStudy: true
}
,
    {
      id: 4,
      type: 'Backend Web Development',
      title: 'SIPELITA by Kementrian LH',
      image: '/images/SIPELITA.png',
      description: 'Government backend platform for processing environmental assessment data with secure upload, validation, and reporting workflows.',
      fullDescription: 'SIPELITA is a government backend system used by the Ministry of Environment and Forestry to process and validate environmental data submitted by all provinces and districts/cities across Indonesia The system manages various types of environmental datasets such as the Regional Environmental Status Report (SLHD), Environmental Quality Index (IKLH), as well as assessment metrics for national environmental award programs including Adipura, Proklim, Adiwiyata, and Nirwasita Tantra.In this project, I developed the backend architecture that handles large-scale document uploads, index computation workflows, multi-stage validation processes, and a role-based authentication system supporting thousands of government users nationwide.',
      techStack: ['Next.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
      role: 'Backend Developer',
      status: 'Maintenance',
      githubUrl: 'https://github.com/Nazirii/SIPELITA',
      caseStudy: true
    },
    {
      id: 5,
      type: 'Mobile App Development',
      title: 'Eatstedi',
      image: '/images/EATSTEDI.png',
      description: 'mobile food-ordering platform built for the KMTEDI student community at UGM, enabling fast and convenient ordering from the campus',
      fullDescription: 'EATSTEDI is a mobile application developed for the KMTEDI (Keluarga Mahasiswa Departemen Teknik Elektro dan Informatika) community at Universitas Gadjah Mada. The app provides a modern, streamlined food-ordering experience for the student canteen, allowing users to browse menus, place orders, track preparation status in real time, and manage payments conveniently from their smartphones.Built with React Native and powered by Firebase, EATSTEDI delivers fast performance, real-time order synchronization, and an intuitive UI designed specifically for the needs of university students.',
      techStack: ['Kotlin', 'Firebase'],
      role: 'Mobile Developer',
      status: 'Ongoing',
      githubUrl: null,
      figmaUrl: 'https://www.figma.com/design/2VK5rJluhwqWtw8YaQAwtH/PPPB?node-id=0-1&p=f&t=kojzQKUnw832gjLc-0',
      caseStudy: true
    },
   {
  id: 6,
  type: 'Backend Web Development',
  title: 'RDK Ramadan Event Platform',
  image: '/icon/rdk.png',
  description: 'A modern event platform for UGM Ramadan activities, featuring schedules, content updates, and community engagement.',
  fullDescription: 'Backend system for RDK UGM  Ramadan website, providing content management, user authentication, event scheduling, and real-time updates. Designed with scalability and security to support large campus-wide traffic during the Ramadan period.',
  techStack: ['Express.js', 'MySQL', 'AWS', 'Redis', 'Next.js'],
  role: 'Backend Developer',
  status: 'Ongoing',
  githubUrl: null,
  projectNotStarted: true,
  caseStudy: true
}

   
  ]

  const openModal = (project) => {
    setModalProject(project)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setModalProject(null), 300)
  }

  const handleSourceClick = (project) => {
    if (project.projectNotStarted) {
      showToastMessage('Project belum dimulai 🚧')
    } else if (!project.githubUrl && project.figmaUrl) {
      window.open(project.figmaUrl, '_blank')
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank')
    } else {
      showToastMessage('Source code tidak tersedia')
    }
  }

  const showToastMessage = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const orbitRadius = 280

  const getCoordinates = (angle) => {
    const rad = (angle * Math.PI) / 180
    return {
      x: orbitRadius * Math.cos(rad),
      y: orbitRadius * Math.sin(rad)
    }
  }

  const buildKeyframes = (angles) => {
    const points = angles.map(getCoordinates)
    return {
      x: points.map(point => point.x),
      y: points.map(point => point.y)
    }
  }

  const restPosition = getCoordinates(0)
  const activePath = buildKeyframes([0, 30, 60, 90])
  const returnPath = buildKeyframes([90, 150, 210, 270, 315, 360])

  const handleSelectProject = (index) => {
    if (index === selectedProject) return
    setReturningProject(selectedProject)
    setSelectedProject(index)
  }

  const rotateProjects = (direction) => {
    const nextIndex = direction === 'next'
      ? (selectedProject + 1) % portfolioProjects.length
      : (selectedProject - 1 + portfolioProjects.length) % portfolioProjects.length

    handleSelectProject(nextIndex)
  }

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-4xl font-bold">My Portfolio</h2>
            
            {/* Toggle Switch */}
            <div className="flex items-center gap-3 bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setIsAnimatedMode(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  !isAnimatedMode 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 size={18} />
                <span className="text-sm font-medium">Grid</span>
              </button>
              <button
                onClick={() => setIsAnimatedMode(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  isAnimatedMode 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <CircleDot size={18} />
                <span className="text-sm font-medium">Circular</span>
              </button>
            </div>
          </div>
          <p className="text-gray-400">The following are the best portfolios during the career path as a developer</p>
        </motion.div>

        {/* Grid Mode - Desktop & Mobile */}
        {!isAnimatedMode && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
              {portfolioProjects.map((project, index) => {
                const colors = typeColors[project.type] || typeColors['Full Stack Web Development']
                const statusColor = statusColors[project.status] || statusColors['Complete']
                
                return (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-[3/4] mb-3 md:mb-4">
                      {/* Background Circle */}
                      <div className="absolute inset-0 flex items-center justify-center md:border-0 border-4 border-amber-300 opacity-80 rounded-2xl md:rounded-none">
                        <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-gray-700/20 group-hover:bg-gray-600/30 group-hover:scale-110 transition-all duration-500" />
                      </div>
                      
                      {/* Image */}
                      <img 
                        src={project.image || "/placeholder.svg"} 
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl relative z-10"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
                        <span className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 ${statusColor.bg} ${statusColor.text} rounded-full text-[10px] md:text-xs font-bold shadow-lg`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 md:space-y-3">
                      <div className={`inline-block px-2 py-0.5 md:px-3 md:py-1 ${colors.bg} ${colors.text} rounded-full text-[9px] md:text-xs font-semibold uppercase tracking-wide border ${colors.border}`}>
                        <span className="md:hidden">{project.type.split(' ')[0]}</span>
                        <span className="hidden md:inline">{project.type}</span>
                      </div>
                      <h3 className="text-xs md:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2 md:line-clamp-none">
                        {project.title}
                      </h3>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-1 md:gap-2 pt-1 md:pt-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleSourceClick(project)}
                          className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md md:rounded-lg transition text-[10px] md:text-sm font-medium"
                        >
                          {project.figmaUrl && !project.githubUrl ? <Figma size={12} className="md:w-4 md:h-4" /> : <Github size={12} className="md:w-4 md:h-4" />}
                          <span className="hidden md:inline">{project.figmaUrl && !project.githubUrl ? 'Figma' : 'Source'}</span>
                        </button>
                        <button
                          onClick={() => openModal(project)}
                          className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-md md:rounded-lg transition text-[10px] md:text-sm font-bold"
                        >
                          <ExternalLink size={12} className="md:w-4 md:h-4" />
                          <span className="hidden md:inline">Details</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </>
        )}

        {/* Circular Animated Mode */}
    {isAnimatedMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[500px] md:min-h-[700px] mt-40 md:mt-12 "
          >
            {/* Top Section - Circular Slider Left, Description Right */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12">
              
              {/* Left Side - Orbital Slider (bergerak dari kanan atas ke tengah dengan pola orbit) */}
              <div className="flex-1 relative h-[300px] md:h-[500px] w-full pointer-events-none">
                {/* Circular Orbit Path - Full circle with gradient trail */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[560px] md:h-[560px] -rotate-90" viewBox="0 0 560 560">
                  <defs>
                    <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#facc15', stopOpacity: 0.8 }} />
                      <stop offset="50%" style={{ stopColor: '#eab308', stopOpacity: 0.4 }} />
                      <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 0.2 }} />
                    </linearGradient>
                  </defs>
                  {/* Background circle */}
                  <circle cx="280" cy="280" r="280" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="8 8" opacity="0.3" />
                  {/* Active path trail - quarter circle from 3 o'clock to 6 o'clock */}
                  <path 
                    d="M 560 280 A 280 280 0 0 1 280 560" 
                    fill="none" 
                    stroke="url(#orbitGradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                  {/* Dots marking key positions */}
                  <circle cx="560" cy="280" r="4" fill="#facc15" opacity="0.8" />
                  <circle cx="478" cy="478" r="3" fill="#eab308" opacity="0.6" />
                  <circle cx="280" cy="560" r="5" fill="#facc15">
                    <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                
                <div className="relative w-full h-full">
                  {portfolioProjects.map((project, index) => {
                    const offset = index - selectedProject
                    const isActive = index === selectedProject
                    
                    // Pola orbit: mengikuti lingkaran dari kanan atas ke tengah
                    // Responsive orbit radius
                    const orbitRadius = isMobile ? 200 : 400
                    let angle, xPos, yPos, scale, zIndex, opacity
                    
                    if (isActive) {
                      // Yang aktif: di tengah (sudut 0°)
                      xPos = 0
                      yPos = 0
                      scale = 1
                      zIndex = 10
                      opacity = 1
                    } else {
                      // Posisi orbit berdasarkan offset
                      // Kanan atas: sudut negatif (karena Y negatif = atas)
                      // -45° = kanan atas, 45° = kanan bawah
                      angle = -135 + (offset * 60) // Mulai dari kanan atas (-135°)
                      
                      const radian = (angle * Math.PI) / 180
                      xPos = orbitRadius * Math.cos(radian)
                      yPos = orbitRadius * Math.sin(radian)
                      
                      scale = 0.7
                      zIndex = 5 - Math.abs(offset)
                      opacity = 0 // Sembunyikan yang tidak aktif
                    }

                    return (
                      <div
                        key={project.id}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out pointer-events-auto"
                        style={{
                          transform: `translate(${xPos}px, ${yPos}px) scale(${scale})`,
                          zIndex: zIndex,
                          opacity: opacity,
                        }}
                      >
                        <img 
                          src={project.image || "/images/NAZIRI.png"} 
                          alt={project.title}
                          className={`cursor-pointer transition-all duration-300 ${
                            isActive
                              ? 'drop-shadow-2xl' 
                              : ''
                          }`}
                          onClick={() => setSelectedProject(index)}
                          style={{
                            width: 'auto',
                            height: isMobile ? '250px' : '450px',
                            maxWidth: 'none'
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Side - Project Details */}
              <div className="flex-1 space-y-4 md:space-y-6 relative z-20 w-full">
                <div className="rounded-2xl md:rounded-3xl p-6 md:p-10 border-none border-gray-700 min-h-[300px] md:h-[500px] flex flex-col justify-center overflow-hidden">
                  <motion.div 
                    key={`status-${selectedProject}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap"
                  >
                    {(() => {
                      const colors = typeColors[portfolioProjects[selectedProject].type] || typeColors['Full Stack Web Development']
                      const statusColor = statusColors[portfolioProjects[selectedProject].status] || statusColors['Complete']
                      return (
                        <>
                          <span className={`inline-block px-3 py-1 md:px-4 md:py-2 ${colors.bg} ${colors.text} rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide border ${colors.border}`}>
                            <span className="md:hidden">{portfolioProjects[selectedProject].type.split(' ')[0]} </span>
                            <span className="hidden md:inline">{portfolioProjects[selectedProject].type}</span>
                          </span>
                          <span className={`inline-block px-3 py-1 md:px-4 md:py-2 ${statusColor.bg} ${statusColor.text} rounded-full text-xs md:text-sm font-bold`}>
                            {portfolioProjects[selectedProject].status}
                            
                          </span>
                        </>
                      )
                    })()}
                  </motion.div>
                  
                  <motion.h3 
                    key={`title-${selectedProject}`}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="text-2xl md:text-5xl font-bold md:text-white text-amber-300 mb-4 md:mb-6 leading-tight"
                  >
                    {portfolioProjects[selectedProject].title}

                  </motion.h3>
                  
                  <motion.p 
                    key={`desc-${selectedProject}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8"
                  >
                    {portfolioProjects[selectedProject].description}
                  </motion.p>

                  <motion.div 
                    key={`buttons-${selectedProject}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    className="flex gap-2 md:gap-4 flex-col sm:flex-row"
                  >
                    <button 
                      onClick={() => handleSourceClick(portfolioProjects[selectedProject])}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gray-800 text-white rounded-full font-bold hover:bg-gray-700 transition-all hover:scale-105 text-sm md:text-base"
                    >
                      {portfolioProjects[selectedProject].figmaUrl && !portfolioProjects[selectedProject].githubUrl ? <Figma size={16} className="md:w-5 md:h-5" /> : <Github size={16} className="md:w-5 md:h-5" />}
                      {portfolioProjects[selectedProject].figmaUrl && !portfolioProjects[selectedProject].githubUrl ? 'View Figma' : 'View Source'}
                    </button>
                    <button 
                      onClick={() => openModal(portfolioProjects[selectedProject])}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg shadow-yellow-400/30 text-sm md:text-base"
                    >
                      <ExternalLink size={16} className="md:w-5 md:h-5" />
                      View Details
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Horizontal Thumbnail Carousel */}
            <div className="flex items-center justify-center gap-3 md:gap-6 px-4">
              <button
                onClick={() => rotateProjects('prev')}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 border-2 border-gray-700 hover:border-yellow-400 flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="flex items-center gap-2 md:gap-4 max-w-full md:max-w-3xl py-2 overflow-x-auto scrollbar-hide">
                {portfolioProjects.map((project, index) => {
                  const isSelected = index === selectedProject
                  return (
                    <div
                      key={project.id}
                      className={`relative flex-shrink-0 cursor-pointer rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                        isSelected
                          ? 'ring-3 md:ring-4 ring-yellow-400 shadow-xl shadow-yellow-400/50 scale-100'
                          : 'ring-2 ring-gray-700 opacity-60 hover:opacity-100 hover:ring-yellow-400/50'
                      }`}
                      style={{ 
                        zIndex: isSelected ? 10 : 5,
                      }}
                      onClick={() => setSelectedProject(index)}
                    >
                      <div className={`relative transition-all duration-300 ${
                        isSelected ? 'w-20 h-20 md:w-28 md:h-28' : 'w-14 h-14 md:w-20 md:h-20'
                      }`}>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 md:px-2 md:py-1 bg-yellow-400 rounded-full">
                            <p className="text-gray-900 text-[9px] md:text-xs font-bold truncate max-w-[60px] md:max-w-[80px]">
                              {project.title.split(' ')[0]}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => rotateProjects('next')}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 border-2 border-gray-700 hover:border-yellow-400 flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>


          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-gray-900 transition">
            More Portfolio
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-start justify-between z-10">
                <div className="flex-1">
                  <div className="flex gap-3 mb-3">
                    {(() => {
                      const colors = typeColors[modalProject.type] || typeColors['Full Stack Web Development']
                      const statusColor = statusColors[modalProject.status] || statusColors['Complete']
                      return (
                        <>
                          <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold uppercase tracking-wide border ${colors.border}`}>
                            {modalProject.type}
                          </span>
                          <span className={`inline-block px-3 py-1 ${statusColor.bg} ${statusColor.text} rounded-full text-xs font-bold`}>
                            {modalProject.status}
                          </span>
                        </>
                      )
                    })()}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{modalProject.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-4 p-2 hover:bg-gray-800 rounded-full transition"
                >
                  <X size={24} className="text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-800">
                  <img
                    src={modalProject.image || "/placeholder.svg"}
                    alt={modalProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Role */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Role</h3>
                  <p className="text-lg text-white font-semibold">{modalProject.role}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{modalProject.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {modalProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 text-yellow-400 rounded-lg text-sm font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <button
                    onClick={() => handleSourceClick(modalProject)}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-yellow-400/30"
                  >
                    {modalProject.figmaUrl && !modalProject.githubUrl ? (
                      <>
                        <Figma size={20} />
                        View Design on Figma
                      </>
                    ) : (
                      <>
                        <Github size={20} />
                        View Source Code on GitHub
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-gray-900 border border-yellow-400 rounded-xl px-6 py-4 shadow-2xl shadow-yellow-400/20">
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="text-2xl">ℹ️</span>
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
