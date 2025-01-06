'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-purple-600"
          >
            3D Artist & Editor
          </motion.h1>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#welcome" onClick={() => scrollToSection('welcome')}>Home</NavLink>
          <NavLink href="#about" onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink href="#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink href="#contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </nav>
        <button
          className="md:hidden text-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-2"
        >
          <NavLink href="#welcome" onClick={() => scrollToSection('welcome')}>Home</NavLink>
          <NavLink href="#about" onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink href="#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink href="#contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </motion.nav>
      )}
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="block md:inline-block text-purple-600 hover:text-purple-800 px-2 py-1 rounded transition duration-300 ease-in-out"
      >
        {children}
      </motion.span>
    </Link>
  )
}

