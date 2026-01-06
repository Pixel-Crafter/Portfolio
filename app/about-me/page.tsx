// import Image from 'next/image'
// import { AboutMeData, SkillData, Socials } from '@/constants'

// function page() {
//   return (
//     <div
//         style={{backgroundColor: "#1c1b22"}}
//         className="
//             w-screen
//             h-screen
//             flex
//             items-center
//             justify-center
//             pt-40
//             md:p-10
//             overflow-y-auto
//             no-scrollbar
//         "
//     >
//         <div className="w-full h-80 mb-20">
//             <h1 className="text-white text-5xl font-bold mb-10 absolute top-20 left-20">
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>About</span>
//                 {" "}Me
//             </h1>
//             <p className="text-white px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum aperiam earum atque distinctio error mollitia ad impedit in dignissimos. Id rem minima magnam inventore, fugiat possimus pesciunt ad. Ducimus.</p>
//         </div>
//         <div
//             className="w-full flex flex-col gap-5 absolute top-50 left-20" 
//         >
//             <h1 className="font-semibold text-white text-4xl md:text-5xl">
//                 My{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
//                     Socials
//                 </span>
//             </h1>        
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
//                 {AboutMeData.map((socials, i) => (
//                     <a key={socials.name} href={socials.url}
//                         className='
//                             flex flex-col items-center gap-2 
//                             p-3 bg-[#26252e] rounded-xl transition 
//                             hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20
//                         '
//                     >
//                         <Image 
//                             src={socials.Image}
//                             alt={socials.name}
//                             width={socials.width}
//                             height={socials.height}
//                         />
//                         <p className='text-white text-sm'>
//                             {socials.name}
//                         </p>
//                     </a>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default page

import Image from "next/image";
import { AboutMeData } from "@/constants";

export default function Page() {
    return (
        <div className="min-h-screen w-full px-4 sm:px-8 md:px-16 py-24 overflow-y-auto bg-white dark:bg-[#1c1b22] text-black dark:text-white transition-colors duration-300">
            
            {/* ABOUT SECTION */}
            <section className="mx-auto mb-24">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        About
                    </span>{" "}
                    Me
                </h1>

                <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti rerum aperiam earum atque distinctio error mollitia
                    ad impedit in dignissimos. Id rem minima magnam inventore.
                </p>
            </section>

            {/* SOCIALS SECTION */}
            <section className="mx-auto">
                <h2 className="font-semibold text-3xl sm:text-4xl mb-8">
                    My{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        Socials
                    </span>
                </h2>

                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                    {AboutMeData.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="flex flex-col items-center gap-2 p-4 bg-gray-200 dark:bg-[#26252e] rounded-xl transition transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                                <Image
                                    src={social.Image}
                                    alt={social.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                                />
                            </div>

                            <p className="font-semibold text-xs sm:text-sm text-center">
                                {social.name}
                            </p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}