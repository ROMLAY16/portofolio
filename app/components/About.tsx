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
              src="/placeholder.svg"
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
              Hai aku Ihsan setiaji
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Saya adalah 3D artist dan Video editor. Di dalam 3D saya dapat
              membuat sebuah bangunan yang indah dan juga saya tak lupa
              menambahkan camera movement di dalam sebuah project saya.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Saya juga dapat membuat iklan di 3D sesuai kebutuhan dan
              permintaan client. Di dalam Adobe, saya cukup mahir menggunakan 2
              aplikasi yaitu Premiere Pro dan After Effects. Dengan sinkronisasi
              antara Premiere dan After Effects, saya dapat menghasilkan video
              sesuai permintaan dan harapan client.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
