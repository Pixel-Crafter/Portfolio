// "use client"
// import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import { SkillData } from '@/constants';
// import Image from 'next/image';
// import { Autoplay } from 'swiper/modules';

// const page = () => {
//   return (
//     <div
//         style={{backgroundColor: "#1C1B22"}}
//         className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
//     >
//         <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
//             <div className='flex flex-col items-center gap-4'>
//                 <h1 className='font-semibold text-white text-[50px]'>
//                     Skills{" "}
//                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 '>
//                         {" "}
//                         &{" "}
//                     </span>
//                     Technologies
//                 </h1>
//                 <p className='text-gray-300 text-[20px]'>
//                     Using the latest Technologies, this world has to offer
//                 </p>
//             </div>
//             <Swiper
//                 slidesPerView={5}
//                 loop={true}
//                 autoplay={{
//                     delay: 0,
//                     disableOnInteraction: false
//                 }}
//                 speed={5000}
//                 modules={[Autoplay]}
//                 className='max-w-[80%]'
//             >
//                 {SkillData.map((skill, index) => (
//                     <SwiperSlide key={index}>
//                         <Image
//                             src={skill.Image}
//                             alt={skill.name}
//                             width={skill.width}
//                             height={skill.height}
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             <Swiper
//                 slidesPerView={5}
//                 loop={true}
//                 autoplay={{
//                     delay: 0,
//                     disableOnInteraction: false,
//                     reverseDirection: true
//                 }}
//                 speed={5000}
//                 modules={[Autoplay]}
//                 className='max-w-[80%]'
//             >
//                 {SkillData.map((skill, index) => (
//                     <SwiperSlide key={index}>
//                         <Image
//                             src={skill.Image}
//                             alt={skill.name}
//                             width={skill.width}
//                             height={skill.height}
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>      
//     </div>
//   )
// }

// export default page

"use client"

import Image from "next/image"
import { SkillData } from "@/constants"

export default function Page() {
  return (
    <div
      style={{ backgroundColor: "#1C1B22" }}
      className="h-screen w-screen flex justify-center pt-24 p-4 overflow-y-auto no-scrollbar"
    >
      <div className="max-w-[900px] w-full flex flex-col items-center text-center gap-12">

        <h1 className="font-semibold text-white text-4xl md:text-5xl">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            & Technologies
          </span>
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {SkillData.map((skill, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center gap-2 
                p-3 bg-[#26252e] rounded-xl transition 
                hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20
              "
            >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
              <p className="text-white text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}