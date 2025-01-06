"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: " SCI-FI City",
    category: "3D Design",
    image: "/g3.jpeg",
    description:
      "Ini adalah SCI-FI City sebuah project 3D dengan mengambil tema Sci-Fi dan menuangkan nya di dalam project ini. project ini mengisahkan tentang sebuah kota terbang yang di tenagai fusi nuklir yang menopang kota ini dan memasok seluruh energi yang berada di kota ini.",
  },
  {
    id: 2,
    title: "RUINS",
    category: "3D Design",
    image: "/g4.jpeg",
    description:
      "Di sini saya membuat project 3D yang bertemakan RUINS atau reeruntuhan yang tertinggal saya mengambil tema ini karena saya suka yang berbau fantassi",
  },
  {
    id: 3,
    title: "Rumah",
    category: "3D Design",
    image: "/g1.jpeg",
    description:
      "Di project 3D ini saya membuat sebuah rumah di tepi danau yang bertemakan modern bercampur medival dan saya memberi sedikit lighting untuk project ini agar menambah kesan estetika  ",
  },
  // {
  //   id: 4,
  //   title: "VFX Compositing",
  //   category: "Editing",
  //   image: "/placeholder.svg",
  //   description: "sabar",
  // },
  {
    id: 5,
    title: "Sekolah",
    category: "3D Design",
    image: "/g2.jpeg",
    description:
      "Di project ini saya membuat sebuah bangunan sekolah, dengan tema je-jepangan dengan menggabungkan unsur alam dan sebuah karakteristik bangunan saya dapat membuat sebuah karya ini",
  },
  // {
  //   id: 6,
  //   title: "Motion Graphics",
  //   category: "Animation",
  //   image: "/placeholder.svg",
  //   description: "sabar",
  // },
  {
    id: 7,
    title: " reactor",
    category: "3D Design",
    image: "/g5.jpeg",
    description:
      "ini adalah reactor yang saya buat sebagai animasi untuk looping sci-fi ini adalah salah satu project kesukaan saya karena selain indah untuk di pandang project ini juga sangat kerenn",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "3D Design", "Animation", "Editing"];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-600 mb-12"
        >
          My Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`m-2 px-4 py-2 rounded-full font-bold text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(
              (project) =>
                activeCategory === "All" || project.category === activeCategory
            )
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {project.category}
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-md hover:bg-purple-700 transition duration-300"
            >
              View Project
            </motion.button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.category}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
