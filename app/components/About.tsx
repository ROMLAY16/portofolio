"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-600 mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/logo.png"
              alt="3D Artist"
              width={400}
              height={400}
              className="rounded-full shadow-lg mx-auto md:mx-0"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
              Hai my name is Ihsan Setiaji
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
             I am a 3D artist and video editor.
             In 3D I can create a beautiful building 
             and I also don't forget to add camera movement to my project.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
             I can also create advertisements in 3D according to client needs and requests. 
             In Adobe, I am quite proficient in using 2 applications,
             namely Premiere Pro and After Effects.
             By synchronizing Premiere and After Effects,
             I can produce videos according to client requests and expectations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              <a href="https://download1587.mediafire.com/d5am8cg1318gG8HM-Jzh1SDMPVnzQSouRSsjn4xoWTJDDnQ6evTW6AEkMKJ7z54cavjcVA5Li3l7qFtAY-1HMgcUX49fVPX6N81rbJuHjXntxcHZvCyG-eAZYa43s9yptsmUYjGB_sAlUm2HgCOH0of-DoHTzgLa1e7UhpL1pswGtQ/z2a8lfpubvuuchd/CV.pdf">
              
              Download Resume
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
