// import ContactForm from '@/components/ContactForm'
// import Image from 'next/image';
// import React from 'react'

// const page = () => {
//   return (
//     <div
//       style={{backgroundColor: "#1C1B22"}}
//       className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
//     >
//       <div
//         style={{backgroundImage: "url(bg-3.jpg)"}}
//         className='h-[70%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex'
//       >
//         <div className='w-1/2 p-8'>
//           <div className='absolute left-20 top-20 w-[70] md:w-[30%]'>
//             <ContactForm />
//           </div>
//         </div>
        
//         <div className='w-3/4 flex items-center justify-center pt-5 pb-7'>
//           <Image
//             src='/contactme.png'
//             alt='Contact Me'
//             className='w-[70%] h-auto'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client"

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div
      style={{ backgroundColor: "#1C1B22" }}
      className="
        w-screen 
        h-screen                /* mobile safe */
        flex 
        items-center 
        justify-center 
        pt-40                   /* mobile padding */
        md:p-10                 /* desktop padding */
        overflow-y-auto         /* ALWAYS allow scrolling */
        no-scrollbar            /* hide scrollbar */
      "
    >
      <div
        style={{ backgroundImage: "url('/bg-3.jpg')" }}
        className="
          w-full 
          max-w-6xl
          bg-cover 
          bg-center
          rounded-xl 
          border border-white/20 
          p-6
          
          /* MOBILE: stack */
          flex
          flex-col 
          gap-10

          /* DESKTOP: side-by-side */
          md:flex-row 
          md:gap-0
        "
      >
        {/* LEFT: FORM */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            Contact Me
          </h1>
          <ContactForm />
        </div>

        {/* RIGHT: IMAGE */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-6">
          <Image
            src="/contactme.png"
            alt="Contact Me"
            width={500}
            height={500}
            className="
              w-[70%] 
              md:w-[80%] 
              max-w-[300px]     /* prevents oversize on mobile */
              h-auto
            "
          />
        </div>
      </div>
    </div>
  )
}

export default page