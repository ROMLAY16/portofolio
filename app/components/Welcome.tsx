'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  )
}

export default function Welcome() {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <Canvas className="absolute inset-0">
        <Scene />
        <OrbitControls />
      </Canvas>
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Welcome
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white mb-8"
        >
          Explore the art of 3D design and editing
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-purple-100 transition duration-300"
        >
          Discover My Work
        </motion.button>
      </div>
    </div>
  )
}

