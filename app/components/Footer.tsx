'use client'

import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold">3D Artist & Editor</h3>
            <p className="mt-2 text-sm sm:text-base">sabar</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <SocialLink href="#" icon={<FaFacebookF className="w-6 h-6" />} />
            <SocialLink href="#" icon={<FaTwitter className="w-6 h-6" />} />
            <SocialLink href="#" icon={<FaInstagram className="w-6 h-6" />} />
            <SocialLink href="#" icon={<FaLinkedinIn className="w-6 h-6" />} />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm sm:text-base"
        >
          <p>&copy; 2023 3D Artist & Editor. All rights reserved.</p>
          <p>tegardevsja</p>
          
        </motion.div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-white hover:text-purple-300 transition duration-300"
    >
      {icon}
    </motion.a>
  )
}

