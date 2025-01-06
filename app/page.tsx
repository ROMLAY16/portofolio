'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000) // 3 seconds loading screen
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Header />
      <section id="welcome" className="min-h-screen flex items-center justify-center">
        <Welcome />
      </section>
      <section id="about" className="bg-white">
        <About />
      </section>
      <section id="projects" className="bg-gray-100">
        <Projects />
      </section>
      <section id="contact" className="bg-purple-100">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

