'use client'

import Link from 'next/link'
import { Menu, Moon, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50  bg-[#353543] border-none border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-[#1a1a2e] font-bold text-sm">😊</span>
            </div>
            <span className="text-xl font-bold">Nazirii</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white hover:text-yellow-400 transition">Home</Link>
            <Link href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link>
            <Link href="#services" className="text-gray-400 hover:text-white transition">About</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <Moon size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <Linkedin size={20} className="text-[#F8C333]" />
            </button>
          
          </div>
        </div>
      </div>
    </header>
  )
}
