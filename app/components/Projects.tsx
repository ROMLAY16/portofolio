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
  {
    id: 4,
    title: "VFX Compositing",
    category: "Editing",
    image: "/placeholder.svg",
    description: "sabar",
  },
  {
    id: 5,
    title: "Sekolah",
    category: "3D Design",
    image: "/g2.jpeg",
    description:
      "Di project ini saya membuat sebuah bangunan sekolah, dengan tema je-jepangan dengan menggabungkan unsur alam dan sebuah karakteristik bangunan saya dapat membuat sebuah karya ini",
  },
  {
    id: 6,
    title: "Motion Graphics",
    category: "Animation",
    image: "/placeholder.svg",
    description: "sabar",
  },
  {
    id: 7,
    title: " reactor",
    category: "3D Design",
    image: "/g5.jpeg",
    description:
      "ini adalah reactor yang saya buat sebagai animasi untuk looping sci-fi ini adalah salah satu project kesukaan saya karena selain indah untuk di pandang project ini juga sangat kerenn",
  },
  {
    id: 7,
    title: " reactor",
    category: "3D Design",
    image: "'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAA/1BMVEX///8Ab7n///3///v//v////oAcLgAbbkAcLoAb71hlcz8//8Abbj///gAarff6vMAarYAZ7YAbL07g78AcL0AZ7kAZrIAcbb7//wAZLL19fv///UAa733//4AbLQAZbIAZboqesHo8vjw9vcAYrQAcrQAaMGWud3D1+kAY6u1zeYAaq251erY5PIAXrVvoM6owuEAVK+HrtNklMQqf8Gqy+DV6PqBo9Opv9vg8fm41N/f5vZBgLU/jMNunsWLttq8yu4gb6jD0+/S2+1Ii7adt95ei7x2mcN5qsuYweNdj8pnl8tjn8zS6/ehyOa3y96EsN6MqcuNttBjmb89gMTQh31PAAAUdElEQVR4nO1cAXvaOLa1JVm2ItvYxmADxgEDgUAIWULapgnJTtPOa9Imzcz2//+WdyVDmhIn0Ldt0n2r830zXwGhSIerq3OvrqxpCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/0VACD3+IcnI/Vea1iHft+7UxevVHoj2wxCjuNfNtx6eGN2vB+FEQzH8hxHiHKEYkTpB8OphU3zwj6mGm4uBExKXuofN+F7DzJt1oC+88hcIwQQ/9Rs8HFSMMCZcMgPfhBcGkr8jj2MYL45/qLefBIQdByNswJAMjGPDwTA0bDiIFBnDUWV33FiaEkfOq653cH/Q2Whnghp85auiq+z1Zfwj44IBADFZ6WL4pt+fTm9vp/3hYFzqCOYIgR/1x6b5U0D48dsB4GI8Pjk5GY/Fv9++fSUM7GFjlEXJaXO5DGAu2jyJSvdbnCW1c231q6Lh1+3RPzcek/gL2aB/WA4Tv7VTAfi+l7S6btg+nfT3Ss2XWYo4+8Ov7NZ813dd2/Oq277fdavVMdjaw8ZIOzd3+5gTYohXhBvvquahBgtj2durWuS+c9D3TMO/L3YDbwIN10wRjJpw+Msnb8ojP3HTlApElDIW6hbVTcZc33d789f94buLuvGkc/3pwMe7OzsssXUA/M+EYSWJvz3ApGDJEFRKrWrmIG35IZ+x2hG6a4u0su6Oxo5wLPe/ZvwZmN4WMtZwxQG4wYfvRy3TtG1BELXsgAVhFFHgiuo5bNMFynbTEjKelSvj+ujD5166GAX8kOmf04NBsSeOHe2sGhwCU0uPhN60dP8Y3dkVOmrpSbmDv1+HxnUrtO0yN9Z4GYyx0zyY+QGjtm7ptlcV68+zU7D3BN7s6d9g6WF3T3Oe029x4jgIZ3N7MQQ22pODhp3rYeM6csYe2/7CneUCJVkYmeU770Hijhex1mHTuc8VwpMk1PVZZ93MYFvYK28HAbOpafru7PD2ABy6wGB4MD2cJb6b2xUwZVm2P0DPypUATH3gwx+HUdDkf+QerZEiu4INSNvyaLseLw3J0W5Ts3rpgCwQowaH9NFNWbeP43uTQCXbhM5ppj2xFaIm7CfZpJXQlIXg0+dvTjr5B3f/65SGZ1HLt3pRGkF31C0VeopfCk5Q06a28Aa0crDGXQ781J+iuzWISya1R7AVSHJx0yj5YRh5g8a9r6CJK/qunmjx46qUOxoazLyIRqEebE9OuNN42MjROoOtbsJC6bvc7Pm5Ej9bzwqk53TfPb0dY1RmljtetgHJuuXZ4bxpNCVXHGtzZsFKPrn3nczUwQ702uAprmDN34xMFsKmV5uPQUTx5sNGIKvg19nqhoHgKhQS98cn+2/BcTStbCViPlZ1/LRdIW3YsoP5cs5GEw9avWT70skFKPzvS1UPaHLa+fadfhVsRdf9ISpygsuO0d/7NqU2c3vgspHQxA8bxZiLDWZvxGCotgWyxfjx6f7bOGW6tCt//PQSRJxE4ah1g+OlR8Nl0wq8El44KNRpp9CT/xmRpcs6S/KuQZkVdw7REsH9lm2ZzPLn2XodkM0Cl7LyppP7ybjKubLdNVxpxOm3IquXOXe6YdiKbO/KWK4GNN0Ru0T1w51COPflLuveao/pK24YB2k4Sijb/YyMtaE2QqURo8Fso5n9fCy5WmdXGsGdKqWVz/fCjJ4VBdWD5StUCuTGXhksG/S7TPTtHhbvrsJY8Z6nJz3acw+bDbJWB5Cmc+nT5OsmE/sF2HJNyZW3hisC1vK6Mgr8Ab4zpH6rp0fVkpabDUdXoGytlFZAT0lyhj6T0q0cr0bVyx6cLApYLwjc046ImdcNlmDUiazgpdbglit/exPihrVDLfk6DcrNZbu406V25J1q+QbOjaFPLZf1rNOmIbMVIN6EqdkWfmQfROh9ItgM0uuNYhbYJbVPHrvacG4/G1tezpW+AVf4rGXplfO7l+gsAaPsXuYxIInjNvASpMz/7EhyStU8KnA7j3SNh760au9g87TgZc19Ya50sKu1bfHADnTmLpMxHF/XglC33Ffiq4Q46Lymh6HNwu6l3B0zGsq+u6UiHQBojlgkAvdZcyOzEkMwLiovzZVpb2BXBp8Hlu4f8lxUkRgdmp4VpvMYFocQ8FklELqBJuleA1xWhwYiNg9r74rUEGriD7Co9TBKh86mOhyhsbvz549N8afhHldr23LnqCV0+NCRsQ7sSoNtRmG/v4T9Xn59KxGyQadu79ghWucrE4sw3B4WyQGEOyl8TEOXcmdzHR7Pa3ubT++n4ke4ihvNNsyORR258Rkcx6dBZDNqX+dq0xh0Q8EOpTvzJkiAK1MwZ/p/F7gjMOPzHUlsZeo4m+twp9N5iTyywI9wRZrajS8mN2mImM0hBN340U6P+XOS73R8lsqsRY9Vz0BEHHqib+Z+LNIMvN4WKzSIdo+B6I3tCtq+1JHORlyJ0xXY2kBZ1V1bZ3T/2llkizttuZH5fSnWidH3WJ4PM/ePHO21XJKhd+UUdOq8k21fTob/MDbjqjF+gxyOwU1Nk5TRdKaJV0LCTyuCDqt2IujgTn1BlU4tEKnTSp6jnhWsMIQm0uos//zhh78nNuNKu9wXLgmkdbar22nYutSkYSFSklno0C0Lu+LIee0uuGKVKbqpyKyvpRfkGVBmCb0ANA9+3ex+LjbiKjb+8sAlIbEKJ4kFUiA9XrprYR1mGFU/iGMdgi9Smgc2aXeA9/Ylb2GtSD8NWj25Bmsb5Bd+D2zEFTcmXncoBSW67so8y7/kSSkEv69q1Ib4m/olgsCtNeepzMSwENzQdUvmXFm3qPOp/FCnbfR/OMp/EWzEFUJbSY/JkgViXAlrsCp70gdxRztldhhaujvniDcdfNMNxbGL1b3By8xDWClaZvM8IWtvPZEI/L2wEVe4Xg5C/0z8k6C3tdxfZ/IlxsMRS60gjCp9jYOK6ES5ufRwrGW5RzJbXx72yS0ms6bux/V5q98Em9lVp+2aVu0VxDYcxWXPtiLX/xvDKhTFBz3bgtgbuhg7ItKZenbE7O0bp4nrbUlb6P/9oILGOOlKiS+ypv/PuEpsy/ZPY9CBsXPjB5EV6KNXjTzdeenboZRRc44Jwte+TVkw62B49VXsktT0blc7JMY7P+fKPUAvpcN/FJtxVWqJpdTuIPBJTtYLKA1FerIp1Daup6HgCqLqSwQE4XlgW7VLcQQts38QHQZbKx3Chnlwx9V/jl25m8Q4b1u6TfWyWIKYa1N3ZAURbR1pwiJiMpUJOz1itWuRgfjSYmHU0QRvW5Kr4EEmE7g6X3BVPXD+YzSDGy5zfY83cj74oWV5c5RHfVkgz19Nvy7tKj7xFmLdLmui5K2np/38i1M/F6Z0pUNDMyYL0Vo7wE+vQULgJ+LNWJTREVl2xOFvwLvxc3O8EVd46pq65X5CMgZGQo/KtfXZIdJGPi3mzap9CKi1jxXaESEP0fo5V9F2faVDcseVf7AmbOZxA1azswwpDQOjhgNaz3j2Er+NuEIT2wauXjvSmSM0rgmu7MAXuokTZ1DN5x0G6Ri2uNL+rVT13BkKrkwzapVWOgR+F8bo9tdoUYTq/cnkdjqdnvcPAB8+TG9vb88+DuLnPnve8sINfPuVaVuW+0EcxcvM0xw0gkUp/QrkcYdrX225KvXIvCJajPtZnHM1EAFhyKLWBfru2EueMeRcBdM1vh1rN/uB61crvl9JfH+76rqplyatUfO594TNYpyvgW7r/pv8nA9E5l7XpHkuBstlOYQgUViaHnU/4LuqLGSMZfBMo+13DrmfcyeGtlyDwafG0/4K4cFurdsNTGoukxhm4LX25/y5z+k34wrEJQt3l5EKN3gZZIPcx0oy8xaHMmKGPZUmpTsdjnDJzRlMD74//iOx9nHJVXmd28FGlp3sTUe6tazvS98fvMp4/Ny1MhtxlaU2Ddnuq7zenMBMj2q6pKryWSpJ1HcDudpCas7vqki1OA9yQtv+S/tOcYJpLty+zkbZ0/ZBkGM0QFcclxfs6t6hhhtNvv6c+idjI64uqnkmYcEVyKpmlKsjs3aEmghrHU9m9SzbjvaHyy2La/WefNt0D78rJNViA32p5WuKdgdFWdNvEH8OAk1sHLmLIsTq20aT4EfOsn8hNuLqHXAVRSz79g5IScmNxUYdLNzYJFn86NHOX3dFWkQr59Mz598HMrBHjH0q+aaVy832M3K94Mp2S87zE6VtyNVRlVnUpPdEEs6oHDhllTNxqQGPuwuuwE7ucZWf5OjmbKVuHmmZx3qy8sucbzZSVLIXdmV21hU2/xpsxNXfHkQtSfveO818H7Mi3apegzrE6GoxEXt+V7wASnsrVwa2nn1XNw9WRr4yUXmmh1FtRag+ApQt1r0eak7zubWVwEZcfQpoL7BO77+FS76pS92QlMGdGPxiP6AQJab28E4vEQyh48Idj9FqHnm6I3PILKocwSa5gZ+u5+e0gdV7oQByI67KoQ1c3U8WYII+CX0qBr97iQl2+Myy0jBg5eZd0RHslweL3c4HrlY6HbZkrs+kyXz9xQqBRTaM6e31bX8JNuKqDb9+kE7uvYM4HtR0czH4Y3kbYBsiRLY7/HadAETpcMnV2we3dTJPfj+0wu61szlXOqO/LVdiij5lNLDvJ+yIQ9BXPxKLKLDtiTioyNpWqpunHeNbYXcs6uclKm8e1PYZV3J9htaoMsGbFMrU27ku+X3tCjlaBntcqLuXK58MWz0hQMHtdweYc21aSaPWwf0W3CktslT+7YN7JujNzsJX273MWa8B0IKr6MUOqjewKyT0ALOqw9VPejI1w1hEZ/WYOCch/OT8/gbFnczVpcB3J6tXs5CR0XApxF9vcGdkydXLHerfq+srbsA1NKhZVkB3363s0+iym+sExtwpJgSdBZUD416QhpoGYYvSvvnD24Xax6V+ZfZ4/UgXXIU0eLna2jCv2X6MKzCYI1+3WK96sdIibtaiBVds99jhxkUl7XzHJ3jsBRvmrL7aP3eOU9My5Tr0rsTh4pp1eGdXL1hbK9Wz/yhX3DmHhQRcnawaBr5dRrPWqCyuKb/vo9XYbqZLNuz2g5N47qBbN8+yWFbtCJTGmnWYc2W/HFdXuV09fm8Ca0ik5UJaXbUM3CjVFlxF0c4R4o2s7qzmSa7A08kmq78FQrFzPGLUlDIgHB0b2tMx9O/A1cKuHuUKAmB5Uqqv3u4lTXS4MCwT1mjHgNC/uXq1fGLLmlG9dr1aYiYu/J6npjxaDK2k3FxD1W/AVaDnd+LGj0RYoJZmoqyT9Qrq6cbVJFokK91bXJQ4P/fkGqTbw4L+MZmzIJDVbunOISfkiftgS9/+glyV77h6xK4gVBuJMRaPcJ5Ei2UY7l4XBXVH+T5L/cui/nnJEze/hWH3gsOm4xTch1viN+CKSf1jF5ayCBAsy9GsYKuACvSlZi/JSv5VJJLeVQPRgCbTAq54Ax3tRjRXtD3/z+zJI50X52oWSq7Y41w5Y+mUQE0WcEXKwR1XkyKuLjzpD2nrrKBvDD7qdjcKYAgms9LKKTgCJJ4dUVg++6JciRKgdioTK8z752ONUB7T+edFE8A3O0uu/EGRVZT8PDHvlx+568XPdiJYpsLFR0n1BjZSpBUpLYTrbfqCdgVSOpV5FT30Dh5pw9FRztVNwVwR6liLHJ97ZfAC992p5ec9btR5+KHsgp+1WBJK47OYv1UyMC7aERF6Wa4w7qR6nlkxPzzSBuX5urB7VFB3QBBaZvP8gYEKDqGQK7NUVlh9ZJETA093w/xiHk3txJt2NKfQb9VzJfgyXBEnHnswDTEA90wzCh+mgdAnQSbtDh3xFKMHnx5X5T5nlsECV8gkIossk+ogOdIz8EMQNa6yII5o9qIgYpYZQrBEmb89kRfMuXwCgrjpg8XXEBruysiVmi8RD/JmY2+RX9Jbc8ybRU8B4s223NMrNwa43JWjPHGSNbHB3UQ7BZdkBFdoLtVmFIS7Jw7nxRe+cOnQD3r6Iu3A3NH7N6W4IXMcCOVPxGqWplVpV1YavgRXDmp8XkZ0SVpChWKyMZAl+6b3t9MgD7Q34s6rXVH42S7wMYKYxtyTdssCVs4aTnEdEDf4UbkVLIaigz51q7NPbwalrC6QjYcfy5WUhUK89Bg7/BmT/1GQAV0+I0VPy6WsYKfD45ks67BYtPfwvEU8zUt7n0bW/l7B4TFwRQY2EzOExZWyPy5LxQ4eNTXc6Uf5VXKdRtQDNZ/6vmdZ7Xaben4lSUzdomI5Rzv7z355AA8+XX31AtsSj04Se5Xn0tnV1qSznDSPyeXWVRnYzDMFpt/+uvWp9ODIBe11e3ZhkToelttu4NrQv5yoXfXa5a2tSX21LZLpm/qbWatCrRAUnxVFqXTkJsA2dRqKjKIltM3+/NmpQtofO76Q44yZMB9mstCybNv+x5tlCxIPamnVDAEeDBhCEduzax/RatmT4ZSDVuENQV6uQMit2wH8AZPZJvTlmq63f9MolloOHpy1ui5LYDQMYp9czliWoC6ioZ5WutFk/PzP3UH8dhRV9TTq9WazWa9HaZrarjeKrpePc0GN+rxiQ+gbyRYwWjPw3D1jdScj6Ga/R4qKPp1BuUdhEZXL5dksaoN5pVEauOXSI5FME7Y8PvhYjvydip1LmQUCZpotb3b2liCj0Kv+WhhO6eREOE9Z1kjAg2bijc6dgXAunpt3clKvc2GG0EB87MTGaioZO7d7pKjAh2jO8nwGNjPORRel0vIZBQXtFwItG/Qn83Joum5NPobODNvlw+mgJCQICI8XOZ//rQG/03gsHoI1eDUu1bXNL2P+10E8nJKjb9AKH0+pIEGEwhePPkXyWZkP9b7CEthAQuPnZYQoJhs8QEVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB4T8B/wvSK5cHfxSzDQAAAABJRU5ErkJggg=='",
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
